import heapq
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import matplotlib.animation as animation
import numpy as np

class Cell:
    def __init__(self, x, y, type='0'):
        self.x, self.y = x, y
        self.type = type
        self.fire_time = float('inf')
        self.g = float('inf')
        self.h = 0
        self.parent = None
    def f(self):
        return self.g + self.h
    def __lt__(self, other):
        return (self.x, self.y) < (other.x, other.y)

def heuristic(a, b):
    return abs(a.x - b.x) + abs(a.y - b.y)

def spread_fire(grid, turn):
    for row in grid:
        for cell in row:
            if cell.fire_time == turn:
                for dx, dy in [(-1,0),(1,0),(0,-1),(0,1)]:
                    nx, ny = cell.x + dx, cell.y + dy
                    if 0 <= nx < 10 and 0 <= ny < 10:
                        neighbor = grid[nx][ny]
                        if neighbor.type == '0' and neighbor.fire_time == float('inf'):
                            neighbor.type = 'F'
                            neighbor.fire_time = turn + 1

def a_star(grid, start, goal):
    for row in grid:
        for cell in row:
            cell.g = float('inf')
            cell.parent = None
    start.g = 0
    start.h = heuristic(start, goal)
    open_set = [(start.f(), start)]
    visited = set()
    while open_set:
        _, current = heapq.heappop(open_set)
        if (current.x, current.y) == (goal.x, goal.y):
            path = []
            while current:
                path.append((current.x, current.y))
                current = current.parent
            return path[::-1]
        visited.add((current.x, current.y))
        for dx, dy in [(-1,0),(1,0),(0,-1),(0,1)]:
            nx, ny = current.x + dx, current.y + dy
            if 0 <= nx < 10 and 0 <= ny < 10:
                neighbor = grid[nx][ny]
                if (nx, ny) in visited or neighbor.type == '1':
                    continue
                time = current.g + 1
                penalty = 5 if neighbor.fire_time <= time else 0
                cost = time + penalty
                if cost < neighbor.g:
                    neighbor.g = cost
                    neighbor.h = heuristic(neighbor, goal)
                    neighbor.parent = current
                    heapq.heappush(open_set, (neighbor.f(), neighbor))
    return []

grid = [[Cell(i, j) for j in range(10)] for i in range(10)]
obstacles = [(2, 2), (4, 5), (6, 7)]
for x, y in obstacles:
    grid[x][y].type = '1'
grid[3][3].type = 'F'
grid[3][3].fire_time = 0
disabled_positions = [(1, 8), (6, 2), (5, 5)]

grid[x][y].type = '2'
grid[3][3].type = 'M'
grid[3][3].fire_time = 0
disabled_positions = [(1, 8), (6, 2), (5, 5)]


for x, y in disabled_positions:
    grid[x][y].type = 'D'
safe_zone = (9, 0)
agent_A_pos = (0, 0)
agent_B_pos = (9, 9)
snapshots = []
for t in range(3):
    spread_fire(grid, t)
    snapshots.append([[cell.type for cell in row] for row in grid])
agent_A_path = []
agent_B_path = []
rescued = []

def assign_agent(agent_pos, targets):
    min_path = None
    target = None
    for tx, ty in targets:
        path = a_star(grid, grid[agent_pos[0]][agent_pos[1]], grid[tx][ty])
        if path and (not min_path or len(path) < len(min_path)):
            min_path = path
            target = (tx, ty)
    if not min_path:
        return [], agent_pos
    grid[target[0]][target[1]].type = '0'
    to_safe = a_star(grid, grid[target[0]][target[1]], grid[safe_zone[0]][safe_zone[1]])
    full_path = min_path + to_safe[1:]
    rescued.append(target)
    return full_path, full_path[-1]

remaining = list(disabled_positions)
while remaining:
    pathA, agent_A_pos = assign_agent(agent_A_pos, remaining)
    if pathA:
        agent_A_path += pathA[1:]
    remaining = [p for p in remaining if p not in rescued]
    if not remaining:
        break
    pathB, agent_B_pos = assign_agent(agent_B_pos, remaining)
    if pathB:
        agent_B_path += pathB[1:]
    remaining = [p for p in remaining if p not in rescued]

max_len = max(len(agent_A_path), len(agent_B_path))
agent_paths = []
for i in range(max_len):
    posA = agent_A_path[i] if i < len(agent_A_path) else agent_A_path[-1]
    posB = agent_B_path[i] if i < len(agent_B_path) else agent_B_path[-1]
    grid_snapshot = [[cell.type for cell in row] for row in grid]
    agent_paths.append((grid_snapshot, posA, posB, i))

def draw_grid(ax, snapshot, agentA, agentB):
    ax.clear()
    ax.set_xticks(np.arange(0, 10, 1))
    ax.set_yticks(np.arange(0, 10, 1))
    ax.set_xticklabels([])
    ax.set_yticklabels([])
    ax.grid(True)
    ax.set_xlim(0, 10)
    ax.set_ylim(0, 10)
    for i in range(10):
        for j in range(10):
            val = snapshot[i][j]
            pos = (i, j)
            if pos == agentA:
                color = 'blue'
            elif pos == agentB:
                color = 'purple'
            elif pos == safe_zone:
                color = 'lime'
            elif val == '1':
                color = 'black'
            elif val == 'F':
                color = 'orangered'
            elif val == 'D':
                color = 'magenta'
            else:
                color = 'white'
            rect = patches.Rectangle((j, 9 - i), 1, 1, facecolor=color, edgecolor='gray')
            ax.add_patch(rect)

fig, ax = plt.subplots(figsize=(6, 6))

def animate(i):
    if i < len(snapshots):
        ax.set_title(f"Fire Spread Turn {i}")
        draw_grid(ax, snapshots[i], (-1, -1), (-1, -1))
    else:
        idx = i - len(snapshots)
        if idx < len(agent_paths):
            snapshot, posA, posB, _ = agent_paths[idx]
            ax.set_title("Agents Rescuing Disabled")
            draw_grid(ax, snapshot, posA, posB)

ani = animation.FuncAnimation(fig, animate, frames=len(snapshots) + len(agent_paths), interval=1000, repeat=False)
plt.show()

