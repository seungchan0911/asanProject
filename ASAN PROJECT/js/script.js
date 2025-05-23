const data = [
    {
        itemId: 1,
        itemImg: "https://upload.wikimedia.org/wikipedia/commons/8/83/AirPods_%28cropped%29.jpg",
        itemName: "에어팟",
        itemCategory: "디지털기기",
        itemPlace: "302호",
        itemTime: "1초전",
        itemCategoryArray: ["에어팟", "디지털기기", "하얀색"] // 최대 3개
    },
    {
        itemId: 1,
        itemImg: "https://upload.wikimedia.org/wikipedia/commons/8/83/AirPods_%28cropped%29.jpg",
        itemName: "에어팟",
        itemCategory: "디지털기기",
        itemPlace: "302호",
        itemTime: "1초전",
        itemCategoryArray: ["에어팟", "디지털기기", "하얀색"] // 최대 3개
    },
    {
        itemId: 1,
        itemImg: "https://upload.wikimedia.org/wikipedia/commons/8/83/AirPods_%28cropped%29.jpg",
        itemName: "에어팟",
        itemCategory: "디지털기기",
        itemPlace: "302호",
        itemTime: "1초전",
        itemCategoryArray: ["에어팟", "디지털기기", "하얀색"] // 최대 3개
    },
    {
        itemId: 1,
        itemImg: "https://upload.wikimedia.org/wikipedia/commons/8/83/AirPods_%28cropped%29.jpg",
        itemName: "에어팟",
        itemCategory: "디지털기기",
        itemPlace: "302호",
        itemTime: "1초전",
        itemCategoryArray: ["에어팟", "디지털기기", "하얀색"] // 최대 3개
    },
    {
        itemId: 1,
        itemImg: "https://upload.wikimedia.org/wikipedia/commons/8/83/AirPods_%28cropped%29.jpg",
        itemName: "에어팟",
        itemCategory: "디지털기기",
        itemPlace: "302호",
        itemTime: "1초전",
        itemCategoryArray: ["에어팟", "디지털기기", "하얀색"] // 최대 3개
    },
]

function main() {
    const itemWrap = document.querySelector(".item-wrap")

    function render() {
        data.forEach(item => {
            const a = document.createElement("a")
            a.classList.add("unknown")
            a.href = "detail.html?id=" + item.itemId

            const categoryListItems = item["itemCategoryArray"]
            .map(itemCategoryArray => `<li class="category">${itemCategoryArray}</li>`)
            .join("")

            a.innerHTML = `
            <div class="item">
            <img src="${item.itemImg}" alt="">
            <div class="item-info">
            <div class="item-info-top">
            <div class="item-info-top-top">
            <div class="item-name">${item.itemName}</div>
            <div class="item-category">${item.itemCategory}</div>
            </div>
            <div class="item-info-top-bottom">
            ${item.itemPlace} <span class="dot"></span> ${item.itemTime}</div>
            </div>
            <div class="category-wrap-cover">
            <div class="category-wrap">
            ${categoryListItems}
            <li class="category">...</li>
            </div>
            </div>
            </div>
            </div>
            <div class="bar"></div>
            `

            itemWrap.append(a)
        })
    }

    render()

    function removeBar() {
        const bars = document.querySelectorAll(".bar")

        bars[bars.length - 1].style.display = "none"
    }

    removeBar()
}

main()

function categoryWidth() {
    const headerWidth = document.querySelector("header").offsetWidth
    const categoryWraps = document.querySelectorAll(".item .category-wrap-cover")
    
    categoryWraps.forEach(categoryWrap => {
        categoryWrap.style.width = (headerWidth - 130) + "px"
    });
}

categoryWidth()
    
window.addEventListener("resize", () => {
    categoryWidth()
})

function headerMargin() {
    requestAnimationFrame(() => {
        const header = document.querySelector("header")
        const main = document.querySelector("main")

        if (header && main) {
            main.style.marginTop = header.offsetHeight + "px"
        }
    })
}

window.addEventListener("load", () => {
    headerMargin()
    window.addEventListener("resize", headerMargin)
})
