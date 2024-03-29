const scrollToFooterBtn = document.querySelector("#scrollToFooterBtn");
const contact = document.querySelector(".contact");
const sector1 = document.querySelector(".sector_1");
const btnDown = document.querySelector("#btnDown");

scrollToFooterBtn.addEventListener("click", () => {
  contact.scrollIntoView({ behavior: "smooth" });
});

btnDown.addEventListener("click", () => {
  sector1.scrollIntoView({ behavior: "smooth" });
});


const scrollSmoothlyToBottom = (id) => {
    // console.log(12);
  const element = $(`#${id}`);
  console.log(12,element);
  element.animate(
    {
      scrollTop: element.prop("scrollHeight"),
    },
    3000
  );
};
