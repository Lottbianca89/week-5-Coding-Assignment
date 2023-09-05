//Menu week05

class MenuApp {
    constructor() {
      this.order = [];
    }
  
    createOrder(item, cost) {
      this.order.push({ item, cost });
    }
  
    viewOrder() {
      if (this.order.length === 0) {
        console.log("Your order is empty.");
      } else {
        console.log("Order Items:");
        this.order.forEach((item, index) => {
          console.log(`${index + 1}. ${item.item} - $${item.cost}`);
        });
      }
    }
  
    deleteOrder(index) {
      if (index >= 1 && index <= this.order.length) {
        const deletedItem = this.order.splice(index - 1, 1);
        console.log(`Deleted: ${deletedItem[0].item} - $${deletedItem[0].cost}`);
      } else {
        console.log("Invalid index. No item deleted.");
      }
    }
  }
  
  const menuApp = new MenuApp();
  
  // Display Menu
  class MenuItem {
    constructor() {
      this.menuItemsCost = {
        cheeseBurgerComb: 11,
        pretzelHotDogComb: 7,
        hotWingsComb: 9,
      };
    }
  }
  
  const menuItem = new MenuItem();
  
  console.log("Welcome to the Menu App!");
  
  
  menuApp.createOrder("cheeseBurgerComb", menuItem.menuItemsCost.cheeseBurgerComb);
  menuApp.createOrder("hotWingsComb", menuItem.menuItemsCost.hotWingsComb);
  menuApp.viewOrder();
  menuApp.deleteOrder(1);
  menuApp.viewOrder();
  






   


 
    



