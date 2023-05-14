AFRAME.registerComponent("markerhandler",{
    init: async function(){
        this.el.addEventListener("markerFound", ()=>{
            console.log("marker found")
            this.handleMarkerFound()
        });
        this.el.addEventListener("markerLost", ()=>{
            console.log("marker lost")
            this.handleMarkerLost()
        });
    },
    handleMarkerFound: function(){
        var buttondiv = document.getElementById("button-div")
        buttondiv.style.display = "flex"

        var orderbutton = document.getElementById("order-button")
        var ordersummarybutton = document.getElementById("order-summary-button")

         orderButton.addEventListener("click", function () {
          swal({
          icon: "https://i.imgur.com/4NZ6uLY.jpg",
          title: "thanks for order",
          text: " ",
          timer:"2000",
          buttons:"false"
        });
      });
  
      orderSummaryButtton.addEventListener("click", () => {
        swal({
          icon: "warning",
          title: "Order Summary",
          text: "Work in progress"
        });
      });
    },
    handleMarkerLost :function(){
        var buttondiv = document.getElementById("button-div")
        buttondiv.style.display = "none"
    }
})