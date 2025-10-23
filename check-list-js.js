    // Initial state
    let state = {
        playerName: "Player",
        coins: 0,
        coinsDone: 0,
        coinsLeft: 0,
        vip: true,
        x2: false,
        taskReward: {
          online: {
            rewardType: 'online',
            rewardPrice: 4,
            title: '3 часа в онлайне.',
            completedCount: 0,
            deleted: false,
          },
          lottery: {
            rewardType: 'lottery',
            rewardPrice: 2,
            title: 'Купить лотерейный билет',
            deleted: false,
          },
          cinema: {
            rewardType: 'cinema',
            rewardPrice: 2,
            title: 'Добавить 5 видео в кинотеатре',
            deleted: false,
          },
          film_studio: {
            rewardType: 'film_studio',
            rewardPrice: 4,
            title: 'Арендовать киностудию',
            deleted: false,
          },
          ammunation: {
            rewardType: 'ammunation',
            rewardPrice: 2,
            title: 'Успешная тренировка в тире',
            deleted: false,
          },
          site: {
            rewardType: 'site',
            rewardPrice: 2,
            title: 'Зайти на любой сайт',
            deleted: false,
          },
          match: {
            rewardType: 'match',
            rewardPrice: 2,
            title: 'Поставить любую реаку в match.',
            deleted: false,
          },
          basketball: {
            rewardType: 'basketball',
            rewardPrice: 2,
            title: 'Забить два гола в баскете.',
            deleted: false,
          },
          football: {
            rewardType: 'football',
            rewardPrice: 2,
            title: 'Забить два гола в футболе.',
            deleted: false,
          },
          tennis: {
            rewardType: 'tennis',
            rewardPrice: 2,
            title: 'Поиграть 1 минуту в настольный теннис.',
            deleted: false,
          },
          bigtennis: {
            rewardType: 'bigtennis',
            rewardPrice: 2,
            title: 'Поиграть 1 минуту в большой теннис.',
            deleted: false,
          },
          voleyball: {
            rewardType: 'voleyball',
            rewardPrice: 2,
            title: 'Забить 10 голов в воллейболе.',
            deleted: false,
          },
          darts: {
            rewardType: 'darts',
            rewardPrice: 2,
            title: 'Победа в дартс.',
            deleted: false,
          },
          arms: {
            rewardType: 'arms',
            rewardPrice: 2,
            title: 'Победа в арм ресслинге.',
            deleted: false,
          },
          service: {
            rewardType: 'service',
            rewardPrice: 2,
            title: 'Починить деталь в автосервисе.',
            deleted: false,
          },
          bigcasino: {
            rewardType: 'bigcasino',
            rewardPrice: 6,
            title: 'Ставка в колесе удачи в казино (межсерверное колесо).',
            deleted: false,
          },
          brawl: {
            rewardType: 'brawl',
            rewardPrice: 2,
            title: 'Зайти в любой канал в Brawl.',
            deleted: false,
          },
          petball: {
            rewardType: 'petball',
            rewardPrice: 4,
            title: 'Кинуть мяч питомцу 15 раз.',
            deleted: false,
          },
          build: {
            rewardType: 'build',
            rewardPrice: 4,
            title: '25 действий на стройке',
            deleted: false,
          },
          mine: {
            rewardType: 'mine',
            rewardPrice: 4,
            title: '25 действий в шахте',
            deleted: false,
          },
          port: {
            rewardType: 'port',
            rewardPrice: 4,
            title: '25 действий в порту',
            deleted: false,
          },
          carting: {
            rewardType: 'carting',
            rewardPrice: 2,
            title: 'Выиграть гонку в картинге',
            deleted: false,
          },
          ferm: {
            rewardType: 'ferm',
            rewardPrice: 2,
            title: '10 действий на ферме',
            deleted: false,
          },
          fire_work: {
            rewardType: 'fire_work',
            rewardPrice: 2,
            title: 'Потушить 25 огоньков пожарным',
            deleted: false,
          },
          race: {
            rewardType: 'race',
            rewardPrice: 2,
            title: 'Проехать 1 уличную гонку',
            deleted: false,
          },
          treasure: {
            rewardType: 'treasure',
            rewardPrice: 2,
            title: 'Выкопать 1 сокровище(не мусор)',
            deleted: false,
          },
          hunting: {
            rewardType: 'hunting',
            rewardPrice: 4,
            title: '5 раз снять 100% шкуру с животных',
            deleted: false,
          },
          contraband: {
            rewardType: 'contraband',
            rewardPrice: 4,
            title: 'Сдать 5 контрабанды',
            deleted: false,
          },
          tk: {
            rewardType: 'tk',
            rewardPrice: 2,
            title: 'Выиграть 5 игр в тренировочном комплексе со ставкой',
            deleted: false,
          },
          maze: {
            rewardType: 'maze',
            rewardPrice: 2,
            title: 'Выиграть 3 любых игры на арене со ставкой',
            deleted: false,
          },
          casino: {
            rewardType: 'casino',
            rewardPrice: 4,
            title: 'Нули в казино',
            deleted: false,
          },
          post: {
            rewardType: 'post',
            rewardPrice: 2,
            title: '10 посылок на почте',
            deleted: false,
          },
          bus: {
            rewardType: 'bus',
            rewardPrice: 4,
            title: '2 круга на любом маршруте автобусника',
            deleted: false,
          },
          gym: {
            rewardType: 'gym',
            rewardPrice: 2,
            title: '20 подходов в зале',
            deleted: false,
          },
          fish: {
            rewardType: 'fish',
            rewardPrice: 8,
            title: 'Поймать 20 рыб.',
            deleted: false,
          },
          metro: {
            rewardType: 'metro',
            rewardPrice: 4,
            title: 'Проехать 1 станцию на метро.',
            deleted: false,
          },
          pet: {
            rewardType: 'pet',
            rewardPrice: 4,
            title: '15 выполненных питомцем команд.',
            deleted: false,
          },
          club: {
            rewardType: 'club',
            rewardPrice: 8,
            title: 'Выполнить 2 квеста любых клубов 4/8 BP.',
            deleted: false,
          },
          mafia: {
            rewardType: 'mafia',
            rewardPrice: 6,
            title: 'Сыграть в мафию в казино.',
            deleted: false,
          },
          trucker: {
            rewardType: 'trucker',
            rewardPrice: 4,
            title: 'Выполнить 3 заказа дальнобойщиком.',
            deleted: false,
          },
          airdrop: {
            rewardType: 'airdrop',
            rewardPrice: 8,
            title: 'Принять участие в двух аирдропах.',
            deleted: false,
          },
        },
        tasks: [
        ],
        tasksToAdd: [

        ],
      };

      // Modal functions
      function openModal() {
        const modalId = state.tasksToAdd.length > 0 ? 'newTaskModal' : 'noTaskModal' ;
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
        document.getElementById("bp-done").textContent = state.coinsDone;
        document.getElementById("bp-left").textContent = state.coinsLeft;

        updateTaskList();
        updateAddTaskList();
      }

      // Update add task list
      function updateAddTaskList() {
        const taskListSelectWrapper = document.getElementById("taskRewardType");
        taskListSelectWrapper.innerHTML = "";

        const taskListSelect = document.createElement("select");
        taskListSelect.id = 'taskRewardTypeSelect';
        taskListSelect.className = 'w-full bg-zinc-700 rounded-lg p-2 text-white border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300';
        taskListSelectWrapper.appendChild(taskListSelect);

        state.tasksToAdd.forEach((task, index) => {
          let price = state.vip == true ? task.rewardPrice : task.rewardPrice / 2;
          price = state.x2 == true ? price * 2 : price;
          const taskElement = document.createElement("option");
          taskElement.value = task.rewardType;
          taskElement.innerHTML = task.title;
          taskListSelect.appendChild(taskElement);
        });
      };

      // Update task list
      function updateTaskList() {
        const taskList = document.getElementById("taskList");
        taskList.innerHTML = "";
        
        state.tasks.forEach((task, index) => {
          let price = state.vip == true ? task.rewardPrice : task.rewardPrice / 2;
          price = state.x2 == true ? price * 2 : price;
          const taskElement = document.createElement("div");
          taskElement.className = `task-item bg-zinc-900 hover:shadow-md hover:bg-zinc-800 rounded-lg p-4 ${
            task.completed && task.rewardType !== 'online' ? "opacity-70 order-last" : "order-none"
          } transform transition-all duration-300`;
          taskElement.id = `task-${task.rewardType}`;
          taskElement.innerHTML = `
                  <div class="flex flex-col lg:flex-row md:flex-row justify-between items-start">
                      <div class="max-w-sm">
                          <h3 class="font-bold ${
                            task.completed && task.rewardType !== 'online' ? "line-through" : ""
                          }">${index + 1}: ${task.title}${task.rewardType === 'online' ? ` Выполнено: ${task.completedCount}раз.` : ''}</h3>
                      </div>
                      <div class="flex mt-1 lg:m-0 md:m-0 items-center space-x-2">
                          <span class="px-2 py-1 bg-purple-500/20 rounded-lg text-sm">
                              +${price}
                          </span>
                          ${
                            !task.completed && task.rewardType !== 'online'
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
                              : task.rewardType !== 'online'
                                 ? `
                                <button onclick="completeTask(${index})" class="px-2 py-1 bg-green-500/20 text-green-500 rounded-lg hover:bg-green-500/30 transition-colors duration-300" title="Task not done">
                                    <i class="fas fa-close"></i>
                                </button>
                              `
                              : `
                              <button onclick="completeTask(${index})" class="px-2 py-1 bg-green-500/20 text-green-500 rounded-lg hover:bg-green-500/30 transition-colors duration-300" title="Task completed">
                                  <i class="fas fa-check"></i>
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
      };

      // Task management functions
      function addNewTask(event) {
        event.preventDefault();
        const rewardType = document.getElementById("taskRewardTypeSelect").value;
        const rewardPrice = state.taskReward[rewardType].rewardPrice;
        const title = state.taskReward[rewardType].title;
        let deletedTaskIndex = 0;
        const tasksListToAdd = state.tasksToAdd;
        let taskListRemoved = [];


        taskListRemoved = tasksListToAdd.filter(item => item.rewardType !== rewardType);
        state.tasksToAdd = taskListRemoved;

        state.tasks.push({
          title,
          rewardPrice,
          rewardType,
          deleted: false,
          completed: false,
          completedCount: 0,
        });

        saveState();
        countCoins();
        updateUI();
        closeModal("newTaskModal");
      }

      function completeTask(index) {
        const task = state.tasks[index];
        let price = state.vip == true ? task.rewardPrice : task.rewardPrice / 2;
        price = state.x2 == true ? price * 2 : price;
        if (task.completed == true && task.rewardType !== 'online') {
            task.completed = !task.completed;
        } else {
            task.completed = true;
            state.coins += price;
            state.coinsDone += price;
        }

        if (task.rewardType === 'online') {
          task.completedCount++;
        }

        // Add completion animation
        const taskElement = document.querySelector(
          `#taskList > div:nth-child(${index + 1})`,
        );

        saveState();
        countCoins();
        setTimeout(() => {
          updateUI();
        }, 500);
      }

      function doneTasks(index) {
        const task = state.tasks[index];
        let price = state.vip == true ? task.rewardPrice : task.rewardPrice / 2;
        price = state.x2 == true ? price * 2 : price;
        task.completed = true;
        state.coinsDone += price;

        // Add completion animation
        const taskElement = document.querySelector(
          `#taskList > div:nth-child(${index + 1})`,
        );

        saveState();
        countCoins();

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
            
            if (obj.rewardType === 'online') {
              obj.completedCount = 0;
            }

            obj.completed = false;
        }

        state.coinsDone = 0;
        state.tasks = tasksList;
   
        saveState();
        countCoins();
        updateUI();
      }

      function vipStatus() {
        const vip = state.vip;
        const btn = document.getElementById('vip-btn');

        state.vip = !state.vip;
   
        saveState();
        countCoins();
        updateUI();
      }


      function x2Status() {
        const x2 = state.x2;
        const btn = document.getElementById('x2-btn');

        state.x2 = !state.x2;
   
        saveState();
        countCoins();
        updateUI();
      }
            
      function countCoins() {
        const tasksList = state.tasks;
        let coinsLeft = 0;

        for (const tasks in tasksList) {
            // skip loop if the property is from prototype
            if (!tasksList.hasOwnProperty(tasks)) continue;
            var obj = tasksList[tasks];
            let price = state.vip == true ? obj.rewardPrice : obj.rewardPrice / 2;
            price = state.x2 == true ? price * 2 : price; 

            if (obj.completed == false) {
              coinsLeft += price;
              state.coinsLeft = coinsLeft;
            }
        }

        saveState();
      }

      function deleteTask(index) {
        const deletedTask = state.tasks[index];
        const rewardType = state.tasks[index].rewardType;
        const rewardPrice = state.tasks[index].rewardPrice;
        const title = state.tasks[index].title;

        let deletedTaskObj = {
          title,
          rewardPrice,
          rewardType,
          deleted: true,
          completed: false,
          completedCount: 0,
        };

        state.tasksToAdd.push(deletedTaskObj);

        // Add delete animation
        const taskElement = document.querySelector(
          `#taskList > div:nth-child(${index + 1})`,
        );

        taskElement.classList.add("opacity-0", "translate-x-4");

        setTimeout(() => {
          state.tasks.splice(index, 1);
          saveState();
          countCoins();
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

        const x2 = state.vip;
        const x2btn = document.getElementById('x2-btn');

        if (state.x2 == true) {
          x2btn.checked = true;
        } else {
          x2btn.checked = false;
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

                if (!obj.deleted) tasksListDefault.push(obj);
            }

            let coinsLeft = 0;

            for (const tasks in tasksListDefault) {
                // skip loop if the property is from prototype
                if (!tasksListDefault.hasOwnProperty(tasks)) continue;
                var task = tasksListDefault[tasks];

                if (task.completed == false) {
                  coinsLeft += task.rewardPrice;
                  state.coinsLeft = coinsLeft;
                }
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