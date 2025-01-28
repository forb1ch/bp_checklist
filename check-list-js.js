    // Initial state
    let state = {
        playerName: "Player",
        coins: 0,
        vip: true,
        taskReward: {
          build: {
            rewardType: 'build',
            rewardPrice: 4,
            title: '25 действий на стройке',
          },
          mine: {
            rewardType: 'mine',
            rewardPrice: 4,
            title: '25 действий в шахте',
          },
          port: {
            rewardType: 'port',
            rewardPrice: 4,
            title: '25 действий в порту',
          },
          carting: {
            rewardType: 'carting',
            rewardPrice: 2,
            title: 'Выиграть гонку в картинге',
          },
          lottery: {
            rewardType: 'lottery',
            rewardPrice: 2,
            title: 'Купить лотерейный билет',
          },
          ferm: {
            rewardType: 'ferm',
            rewardPrice: 2,
            title: '10 действий на ферме',
          },
          fire_work: {
            rewardType: 'fire_work',
            rewardPrice: 2,
            title: 'Потушить 25 огоньков пожарным',
          },
          race: {
            rewardType: 'race',
            rewardPrice: 2,
            title: 'Проехать 1 уличную гонку',
          },
          treasure: {
            rewardType: 'treasure',
            rewardPrice: 2,
            title: 'Выкопать 1 сокровище(не мусор)',
          },
          cinema: {
            rewardType: 'cinema',
            rewardPrice: 2,
            title: 'Добавить 5 видео в кинотеатре',
          },
          film_studio: {
            rewardType: 'film_studio',
            rewardPrice: 2,
            title: 'Арендовать киностудию',
          },
          ammunation: {
            rewardType: 'ammunation',
            rewardPrice: 2,
            title: 'Успешная тренировка в тире',
          },
          hunting: {
            rewardType: 'hunting',
            rewardPrice: 2,
            title: '5 раз снять 100% шкуру с животных',
          },
          contraband: {
            rewardType: 'contraband',
            rewardPrice: 2,
            title: 'Сдать 5 контрабанды',
          },
          tk: {
            rewardType: 'tk',
            rewardPrice: 2,
            title: 'Выиграть 5 игр в тренировочном комплексе со ставкой',
          },
          maze: {
            rewardType: 'maze',
            rewardPrice: 2,
            title: 'Выиграть 3 любых игры на арене со ставкой',
          },
        },

        tasks: [
        ],
      };

      // Modal functions
      function openModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.add("active");
        // Prevent body scrolling when modal is open
        document.body.style.overflow = "hidden";
      }

      function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.remove("active");
        // Restore body scrolling
        document.body.style.overflow = "auto";
        // Reset form
        document.getElementById("newTaskForm").reset();
      }

      // Close modal when clicking outside
      window.onclick = function (event) {
        if (event.target.classList.contains("modal")) {
          closeModal(event.target.id);
        }
      };

      // Load state from localStorage
      function loadState() {
        const savedState = localStorage.getItem("questManagerState");
        if (savedState) {
          state = JSON.parse(savedState);
          updateUI();
        }
      }

      // Save state to localStorage
      function saveState() {
        localStorage.setItem("questManagerState", JSON.stringify(state));
      }

      // Update UI elements
      function updateUI() {
        document.getElementById("playerName").textContent = state.playerName;
        document.getElementById("coins").textContent = state.coins;

        updateTaskList();
      }

      // Update task list
      function updateTaskList() {
        const taskList = document.getElementById("taskList");
        taskList.innerHTML = "";
        
        state.tasks.forEach((task, index) => {
          const price = state.vip == true ? task.rewardPrice : task.rewardPrice / 2;
          const taskElement = document.createElement("div");
          taskElement.className = `task-item bg-zinc-900 hover:shadow-md hover:bg-zinc-800 rounded-lg p-4 ${
            task.completed ? "opacity-70" : ""
          } transform transition-all duration-300`;
          taskElement.innerHTML = `
                  <div class="flex flex-col lg:flex-row md:flex-row justify-between items-start">
                      <div class="max-w-sm">
                          <h3 class="font-bold ${
                            task.completed ? "line-through" : ""
                          }">${index + 1}: ${task.title}</h3>
                      </div>
                      <div class="flex mt-1 lg:m-0 md:m-0 items-center space-x-2">
                          <span class="px-2 py-1 bg-purple-500/20 rounded-lg text-sm">
                              +${price}
                          </span>
                          ${
                            !task.completed
                              ? `
                              <button onclick="doneTasks(${index})" class="px-2 py-1 bg-green-500/20 text-green-500 rounded-lg hover:bg-green-500/30 transition-colors duration-300" title="Task done before">
                                  <i class="fas fa-plus"></i>
                              </button>
                          `
                              : ""
                          }
                          ${
                            !task.completed
                              ? `
                              <button onclick="completeTask(${index})" class="px-2 py-1 bg-green-500/20 text-green-500 rounded-lg hover:bg-green-500/30 transition-colors duration-300" title="Task completed">
                                  <i class="fas fa-check"></i>
                              </button>
                          `
                              : `
                              <button onclick="completeTask(${index})" class="px-2 py-1 bg-green-500/20 text-green-500 rounded-lg hover:bg-green-500/30 transition-colors duration-300" title="Task not done">
                                  <i class="fas fa-close"></i>
                              </button>
                          `
                          }
                          <button onclick="deleteTask(${index})" class="px-2 py-1 bg-red-500/20 text-red-500 rounded-lg hover:bg-red-500/30 transition-colors duration-300" title="Delete task">
                              <i class="fas fa-trash"></i>
                          </button>
                      </div>
                  </div>
              `;
          taskList.appendChild(taskElement);
        });
      }

      // Task management functions
      function addNewTask(event) {
        event.preventDefault();
        const rewardType = document.getElementById("taskRewardType").value;
        const rewardPrice = state.taskReward[rewardType].rewardPrice;
        const title = state.taskReward[rewardType].title;

        state.tasks.push({
          title,
          rewardPrice,
          rewardType,
          completed: false,
        });

        saveState();
        updateUI();
        closeModal("newTaskModal");
      }

      function completeTask(index) {
        const task = state.tasks[index];
        const price = state.vip == true ? task.rewardPrice : task.rewardPrice / 2;

        if (task.completed == true) {
            task.completed = !task.completed;
        } else {
            task.completed = true;
            state.coins += price;
        }

        // Add completion animation
        const taskElement = document.querySelector(
          `#taskList > div:nth-child(${index + 1})`,
        );

        saveState();

        // taskElement.classList.add("opacity-50", "translate-x-2");
        setTimeout(() => {
          updateUI();
        }, 500);
      }

      function doneTasks(index) {
        const task = state.tasks[index];
        task.completed = true;

        // Add completion animation
        const taskElement = document.querySelector(
          `#taskList > div:nth-child(${index + 1})`,
        );

        saveState();

        // taskElement.classList.add("opacity-50", "translate-x-2");
        setTimeout(() => {
          updateUI();
        }, 500);
      }

      function unCompleteTasks() {
        const tasksList = state.tasks;

        for (var task in tasksList) {
            // skip loop if the property is from prototype
            if (!tasksList.hasOwnProperty(task)) continue;
            const completed = false;
            var obj = tasksList[task];

            obj.completed = false;
        }

        state.tasks = tasksList;
   
        saveState();
        updateUI();
      }

      function vipStatus() {
        const vip = state.vip;
        const btn = document.getElementById('vip-btn');

        state.vip = !state.vip;
   
        saveState();
        updateUI();
      }

      function deleteTask(index) {
        // Add delete animation
        const taskElement = document.querySelector(
          `#taskList > div:nth-child(${index + 1})`,
        );

        taskElement.classList.add("opacity-0", "translate-x-4");

        setTimeout(() => {
          state.tasks.splice(index, 1);
          saveState();
          updateUI();
        }, 300);
      }

      function editName() {
        const newName = prompt("Enter your new name:", state.playerName);
        if (newName && newName.trim()) {
          state.playerName = newName.trim();
          saveState();
          updateUI();
        }
      }

      function editCoins() {
        const newCoins = prompt("Put the number of ur coins:", state.coins);
        if (newCoins && newCoins.trim()) {
          state.coins = Number(newCoins.trim());
          saveState();
          updateUI();
        }
      }

      // Handle keyboard events for modal
      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          const modal = document.querySelector(".modal.active");
          if (modal) {
            closeModal(modal.id);
          }
        }
      });

      // Prevent form submission when pressing enter in input fields
      document.querySelectorAll("input").forEach((input) => {
        input.addEventListener("keypress", function (event) {
          if (event.key === "Enter") {
            event.preventDefault();
          }
        });
      });

      // Add animations for stats changes
      function animateStatChange(statElement) {
        statElement.classList.add("scale-110", "text-purple-400");
        setTimeout(() => {
          statElement.classList.remove("scale-110", "text-purple-400");
        }, 300);
      }

      // Initialize app with some example tasks if empty
      function initializeApp() {
        loadState();
        const vip = state.vip;
        const btn = document.getElementById('vip-btn');

        if (state.vip == true) {
          btn.checked = true;
        } else {
          btn.checked = false;
        }

        if (state.tasks.length === 0) {

            const tasksList = state.taskReward;
            const tasksListDefault = state.tasks;

            for (var tasks in tasksList) {
                // skip loop if the property is from prototype
                if (!tasksList.hasOwnProperty(tasks)) continue;
                const completed = false;
                var obj = tasksList[tasks];
                obj = {...obj, completed};

                tasksListDefault.push(obj);
            }
       
          saveState();
          updateUI();
        }
      }

      // Add custom error handling
      window.addEventListener("error", function (event) {
        console.error("An error occurred:", event.error);
        const errorNotification = document.createElement("div");
        errorNotification.className =
          "fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg";
        errorNotification.textContent =
          "An error occurred. Please try again.";
        document.body.appendChild(errorNotification);

        setTimeout(() => {
          errorNotification.remove();
        }, 3000);
      });

      // Add local storage error handling
      function saveState() {
        try {
          localStorage.setItem("questManagerState", JSON.stringify(state));
        } catch (error) {
          console.error("Failed to save state:", error);
          // Handle storage quota exceeded
          if (error.name === "QuotaExceededError") {
            alert("Storage limit reached. Please delete some tasks.");
          }
        }
      }

      // Initialize tooltips for buttons
      function initializeTooltips() {
        const buttons = document.querySelectorAll("button");
        buttons.forEach((button) => {
          if (button.querySelector("i")) {
            button.setAttribute(
              "title",
              button.getAttribute("title"),
            );
          }
        });
      }

      // Automatically save state periodically
      setInterval(saveState, 10000); // Save every 10 seconds

      // Initialize the application
      document.addEventListener("DOMContentLoaded", function () {
        initializeApp();
        initializeTooltips();
      });