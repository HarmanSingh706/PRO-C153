AFRAME.registerComponent("diver-rotation-reader"), {
    schema: {
        speedOfRotation: {type: "number", default:0},
        speedOfPosition: {type: "number", default:0},
    },
    init: function () {
        window.addEventListener("keydown", (e) => {
            this.data.speedOfRotation = this.e1.getAttribute("rotation")
            this.data.speedOfPosition = this.e1.getAttribute("position")

            var diverRotation = this.data.speedOfRotation;
            var diverPosition = this.data.speedOfPosition;

            if(e.key === "ArrowRight"){
                if(diverRotation.x < 10) {
                    diverRotation.x += 0.5;
                    this.e1.setAttribute("rotation", diverRotation);

                }
            }

            if(e.key === "ArrowLeft"){
                if(diverRotation.x > -10) {
                    diverRotation.x -= 0.5;
                    this.e1.setAttribute("rotation", diverRotation);
                    
                }
            }

            if(e.key === "ArrowUp"){
                if(diverRotation.z < 10) {
                    diverRotation.z += 0.5;
                    this.e1.setAttribute("rotation", diverRotation);
                }
                if(diverPosition.y < 4) {
                    diverPosition.y += 0.1;
                    this.e1.setAttribute("position", diverPosition)
                }
            }

            if(e.key === "ArrowDown"){
                if(diverRotation.z > -10) {
                    diverRotation.z -= 0.5;
                    this.e1.setAttribute("rotation", diverRotation);
                }
                if(diverPosition.y > -4) {
                    diverPosition.y -= 0.1;
                    this.e1.setAttribute("position", diverPosition)
                }
            }
        })
    }
}