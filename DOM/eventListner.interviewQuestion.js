document.addEventListener("click", (e) => {
    const circles = document.querySelectorAll("#circle");
    if(circles.length >= 2){
        const [circle1, circle2] = circles;
    
    if (circle1 && circle2) {
        const x1 = circle1.offsetLeft + circle1.offsetWidth / 2;
        const y1 = circle1.offsetTop + circle1.offsetHeight / 2;
        const x2 = circle2.offsetLeft + circle2.offsetWidth / 2;
        const y2 = circle2.offsetTop + circle2.offsetHeight / 2;
    
        // console.log(`Circle 1 center: (${x1}, ${y1})`);
        // console.log(`Circle 2 center: (${x2}, ${y2})`);
        
        // Calculate the distance between the centers of the circles
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        
        // Calculate the radii of the circles
        const radius1 = circle1.offsetWidth / 2;
        const radius2 = circle2.offsetWidth / 2;
    
        // console.log(`Distance between centers: ${distance}`);
        // console.log(`Sum of radii: ${radius1 + radius2}`);
        
        // Check if the distance is less than or equal to the sum of the radii
        if (distance <= (radius1 + radius2)) {
            if (distance < Math.abs(radius1 - radius2)) {
                console.log("One circle is completely inside the other without touching");
            }else { console.log("Circles intersect");}
           
        } else {
            console.log("Circles do not intersect");
        }
        // Calculate the area of intersection
        const r1Square = radius1 * radius1;
        const r2Square = radius2 * radius2;
        const distanceSquare = distance * distance;

        const alpha = Math.acos((distanceSquare + r1Square - r2Square) / (2 * distance * radius1));
        const beta = Math.acos((distanceSquare + r2Square - r1Square) / (2 * distance * radius2));

        const intersectArea = (r1Square * alpha) + (r2Square * beta) - (0.5 * Math.sqrt((-distance + radius1 + radius2) * (distance + radius1 - radius2) * (distance - radius1 + radius2) * (distance + radius1 + radius2)));

        console.log(`Area of intersection: ${intersectArea.toFixed(2)} square pixels`);

        
    }
        circles.forEach(circle => circle.remove());
    }
    else {
        const radius = Math.random() * 90 + 10;

    const circle = document.createElement("div");
    circle.style.width = `${2*radius}px`;
    circle.style.height = `${2*radius}px`;
    circle.style.borderRadius = "50%";
    circle.style.border = "1px solid black";
    circle.style.position = "fixed";
    circle.style.left = `${e.clientX - radius}px`;
    circle.style.top = `${e.clientY - radius}px`;
    circle.id = "circle";

    document.body.appendChild(circle);
    }
})