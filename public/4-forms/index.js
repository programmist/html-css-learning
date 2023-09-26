country.onclick = () => {
  if (countries.style.display === "block") {
    countries.style.display = "none";
  } else {
    countries.style.display = "block";
    country.style.borderRadius = "5px 5px 0 0";
  }
};

for (let option of countries.options) {
  option.onclick = function () {
    country.value = this.value;
    countries.style.display = "none";
  };
}

countries.style.width = country.offsetWidth + "px";
countries.style.left = country.offsetLeft + "px";
countries.style.top = country.offsetTop + country.offsetHeight + "px";
