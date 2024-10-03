const data = [
  {
    profilePic:
      "https://images.unsplash.com/photo-1568745663067-9248ee880a3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
    displayPic:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww",
    pendingMsg: 4,
    location: "Thessaloniki, Greece",
    name: "Rachel",
    age: 27,
    interests: [
      {
        icon: `<i class="ri-headphone-fill"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "painting",
      },
      {
        icon: `<i class="ri-code-box-fill"></i>`,
        interest: "coding",
      },
    ],
    bio: "Passionate photographer capturing moments and memories for you that tell a story.",
    isFriend: null,
  },
  {
    profilePic:
      "https://plus.unsplash.com/premium_photo-1675034393378-df55b8d93459?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI4fHx8ZW58MHx8fHx8",
    displayPic:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMsg: 9,
    location: "Baden-Württemberg",
    name: "Eva Aline",
    age: 31,
    interests: [
      {
        icon: `<i class="ri-code-box-fill"></i>`,
        interest: "coding",
      },
      {
        icon: `<i class="ri-camera-fill"></i>`,
        interest: "photography",
      },
    ],
    bio: "Exploring the world through my lens, one frame at a time. 📸✨ #Photography #VisualStorytelling #CaptureTheMoment",
    isFriend: null,
  },
  {
    profilePic:
      "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    displayPic:
      "https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fHww",
    pendingMsg: 5,
    location: "Greece",
    name: "Laodike",
    age: 39,
    interests: [
      {
        icon: `<i class="ri-live-fill"></i>`,
        interest: "videography",
      },
      {
        icon: `<i class="ri-gamepad-fill"></i>`,
        interest: "gaming",
      },
      {
        icon: `<i class="ri-headphone-fill"></i>`,
        interest: "music",
      },
    ],
    bio: " Professional photographer dedicated to immortalizing life's beautiful moments. ",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1531908092336-417f2333f254?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://plus.unsplash.com/premium_photo-1675827055620-24d540e0892a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    pendingMsg: 11,
    location: "Bremen, Germany",
    name: "Silvan Babin",
    age: 25,
    interests: [
      {
        icon: `<i class="ri-code-box-fill"></i>`,
        interest: "coding",
      },
      {
        icon: `<i class="ri-camera-fill"></i>`,
        interest: "photography",
      },
      {
        icon: `<i class="ri-image-edit-fill"></i>`,
        interest: "editing",
      },
    ],
    bio: "Creative photographer with a keen eye for detail and a love for storytelling.",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1628487871428-20973df37429?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQxfHx8ZW58MHx8fHx8",
    displayPic:
      "https://plus.unsplash.com/premium_photo-1673796535470-1e08695c0887?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    pendingMsg: 7,
    location: "Oblast, Russia",
    name: "Varduhi",
    age: 23,
    interests: [
      {
        icon: `<i class="ri-java-line"></i>`,
        interest: "coding",
      },
      {
        icon: `<i class="ri-ie-fill"></i>`,
        interest: "traveling",
      },
      {
        icon: `<i class="ri-eye-fill"></i>`,
        interest: "movies",
      },
    ],
    bio: "Passionate photographer with a keen eye for capturing life's most meaningful moments, my work blends creativity with technical skill",
    isFriend: null,
  },
];

let curr = 0;
let isAnimating = false;

// function to select the elements
function select(element) {
  return document.querySelector(element);
}

// set data
function setData(curr) {
  // to change the navbar content
  select(".profileImage img").src = data[curr]?.profilePic;
  select("#msg span").textContent = data[curr].pendingMsg + "+";

  // to change bottom container content
  select(".location h3").textContent = data[curr].location;
  select(".name h1:nth-child(1)").textContent = data[curr].name;
  select(".name h1:nth-child(2)").textContent = data[curr].age;
  select(".bio p").textContent = data[curr].bio;

  let clutter = "";
  data[curr].interests.forEach((interest) => {
    clutter += ` <div class="tag flex items-center gap-2 bg-white/50 text-black rounded-2xl px-2">
          ${interest.icon}
          <h3 class="text-sm capitalize">${interest.interest}</h3>
      </div>`;
  });
  select(".tags").innerHTML = clutter;
}

// function to setInitial card
function initialCard() {
  select(".mainCard img").src = data[curr]?.displayPic;
  select(".incomingCard img").src = data[curr + 1].displayPic;
  setData(curr);
  curr = 2;
}

// function to change the image
function imageChange() {
  if (!isAnimating) {
    isAnimating = true;
    let tl = gsap.timeline({
      onComplete: function () {
        isAnimating = false;
        let mainCard = select(".mainCard");
        let incomingCard = select(".incomingCard");

        incomingCard.classList.remove("z-[2]");
        incomingCard.classList.add("z-[3]");
        incomingCard.classList.remove("incomingCard");

        mainCard.classList.remove("z-[3]");
        mainCard.classList.add("z-[2]");
        gsap.set(mainCard, {
          scale: 1,
          opacity: 1,
        });

        if (curr === data.length) curr = 0;

        select(".mainCard img").src = data[curr].displayPic;
        curr++;

        mainCard.classList.remove("mainCard");

        incomingCard.classList.add("mainCard");
        mainCard.classList.add("incomingCard");
      },
    });

    tl.to(
      ".mainCard",
      {
        scale: 1.1,
        opacity: 0,
        ease: Circ,
        duration: 0.9,
      },
      "a"
    ).from(
      ".incomingCard",
      {
        scale: 0.95,
        opacity: 0,
        ease: Circ,
        duration: 1,
      },
      "a"
    );
  }
}

let deny = select(".deny");
let accept = select(".accept");

accept.addEventListener("click", function () {
  imageChange();
  setData(curr - 1);
  gsap.from("#details .ele", {
    y: "100%",
    opacity: 0,
    stagger: 0.1,
    ease: Power4.easeInOut,
    duration: 1,
  });
});
deny.addEventListener("click", function () {
  imageChange();
  setData(curr - 1);
  gsap.from("#details .ele", {
    y: "100%",
    opacity: 0,
    stagger: 0.1,
    ease: Power4.easeInOut,
    duration: 1,
  });
});

initialCard();

// function to make a container creater
(function createrCon() {
  document.querySelectorAll(".ele").forEach((elm) => {
    let div = document.createElement("div");
    div.classList.add(`${elm.classList[1]}container`, "overflow-hidden");
    div.appendChild(elm);
    select("#details").appendChild(div);
  });
})();
