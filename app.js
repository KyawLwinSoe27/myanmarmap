let place = document.querySelector(".card-title-text");
let allPath = document.querySelectorAll(".map path");
let img = document.querySelector(".card-img");
let capital = document.querySelector(".capital");
let map = document.querySelector(".location");
let district = document.querySelector(".district");
let township = document.querySelector(".township");
let ppl = document.querySelector(".ppl");
let details = document.querySelector(".details");
let website = document.querySelector(".website");
let cityName = document.querySelector(".city-name");

let city = [{
    name: "Yangon",
    capital: "ရန်ကုန်မြို့",
    maps: "၁၀၁၇၁စတုရန်းကီလိုမီတာ",
    district: "၄ ခု",
    township: "၃၃ မြို့နယ်",
    popul: "၇,၃၆၀,၇၀၃ ဦးရေ",
    img: ("../img/Yangon.svg"),
    url: ("https://my.wikipedia.org/wiki/%E1%80%9B%E1%80%94%E1%80%BA%E1%80%80%E1%80%AF%E1%80%94%E1%80%BA%E1%80%99%E1%80%BC%E1%80%AD%E1%80%AF%E1%80%B7"),
    website: ("https://yangon.gov.mm/")
},{
    name: "Kachin",
    capital: "မြစ်ကြီနားမြို့",
    maps: "၈၉၀၄၁စတုရန်းကီလိုမီတာ",
    district: "၄ ခု",
    township: "၁၈ မြို့နယ်",
    popul: "၁၆၈၉၄၄၁ ဦးရေ",
    img: ("../img/Kachin.svg"),
    url: ("https://my.wikipedia.org/wiki/%E1%80%80%E1%80%81%E1%80%BB%E1%80%84%E1%80%BA%E1%80%95%E1%80%BC%E1%80%8A%E1%80%BA%E1%80%94%E1%80%9A%E1%80%BA"),
    website: ("https://kachin.gov.mm")
},{
    name: "Kayah",
    capital: "လွိုင်ကော်မြို့",
    maps: "၁၁၇၃၁.၅စတုရန်းကီလိုမီတာ",
    district: "၂ ခု",
    township: "၇ မြို့နယ်",
    popul: "၂၉၉,၀၂၃ ဦးရေ",
    img: ("../img/Kayah.svg"),
    url: ("https://my.wikipedia.org/wiki/%E1%80%80%E1%80%9A%E1%80%AC%E1%80%B8%E1%80%95%E1%80%BC%E1%80%8A%E1%80%BA%E1%80%94%E1%80%9A%E1%80%BA"),
    website: ("https://kayah.gov.mm")
},{
    name: "Kayin",
    capital: "ဘားအံမြို့",
    maps: "၃၀၃၈၂.၈ စတုရန်းကီလိုမီတာ",
    district: "၄ ခု",
    township: "၇ မြို့နယ်",
    popul: "၁,၅၇၄,၀၇၉ ဦးရေ",
    img: ("../img/Kayin.svg"),
    url: ("https://my.wikipedia.org/wiki/%E1%80%80%E1%80%9B%E1%80%84%E1%80%BA%E1%80%95%E1%80%BC%E1%80%8A%E1%80%BA%E1%80%94%E1%80%9A%E1%80%BA"),
    website: ("https://kayin.gov.mm")
},{
    name: "Shan",
    capital: "တောင်ကြီးမြို့",
    maps: "၁၅၅၈၀၁.၃ စတုရန်းကီလိုမီတာ",
    district: "၁၄",
    township: "၅၅ မြို့နယ်",
    popul: "၅,၈၂၄,၄၃၂ ဦးရေ",
    img: ("../img/Shan.svg"),
    url: ("https://my.wikipedia.org/wiki/%E1%80%9B%E1%80%BE%E1%80%99%E1%80%BA%E1%80%B8%E1%80%95%E1%80%BC%E1%80%8A%E1%80%BA%E1%80%94%E1%80%9A%E1%80%BA"),
    website: ("https://shan.gov.mm")
},{
    name: "Mon",
    capital: "မော်လမြိုင်မြို့",
    maps: "၁၂၂၉၆.၆ စတုရန်းကီလိုမီတာ",
    district: "၂ ခု",
    township: "၁၀ မြို့နယ်",
    popul: "၂,၀၅၄,၃၉၃ ဦးရေ",
    img: ("../img/Mon.svg"),
    url: ("https://my.wikipedia.org/wiki/%E1%80%99%E1%80%BD%E1%80%94%E1%80%BA%E1%80%95%E1%80%BC%E1%80%8A%E1%80%BA%E1%80%94%E1%80%9A%E1%80%BA"),
    website: ("https://mon.gov.mm")
},{
    name: "Rakhine",
    capital: "စစ်တွေမြို့",
    maps: "၃၆၇၇၈.၀ စတုရန်းကီလိုမီတာ",
    district: "၅ ခု",
    township: "၁၇ မြို့နယ်",
    popul: "၃,၁၈၈,၈၀၇ ဦးရေ",
    img: ("../img/Rakhine.svg"),
    url: ("https://my.wikipedia.org/wiki/%E1%80%9B%E1%80%81%E1%80%AD%E1%80%AF%E1%80%84%E1%80%BA%E1%80%95%E1%80%BC%E1%80%8A%E1%80%BA%E1%80%94%E1%80%9A%E1%80%BA"),
    website: ("https://rakhine.gov.mm")
},{
    name: "Tanintharyi",
    capital: "ထားဝယ်မြို့",
    maps: "၄၃၃၄၄.၉ စတုရန်းကီလိုမီတာ",
    district: "၃ ခု",
    township: "၁၈ မြို့နယ်",
    popul: "၁,၄၀၈,၄၀၁ ဦးရေ",
    img: ("../img/Tanintharyi.svg"),
    url: ("https://my.wikipedia.org/wiki/%E1%80%90%E1%80%94%E1%80%84%E1%80%BA%E1%80%B9%E1%80%9E%E1%80%AC%E1%80%9B%E1%80%AE%E1%80%90%E1%80%AD%E1%80%AF%E1%80%84%E1%80%BA%E1%80%B8%E1%80%92%E1%80%B1%E1%80%9E%E1%80%80%E1%80%BC%E1%80%AE%E1%80%B8"),
    website: ("https://tanintheryi.gov.mm")
},{
    name: "Chin",
    capital: "ဟားခါးမြို့",
    maps: "၃၆၀၁၈.၈ စတုရန်းကီလိုမီတာ",
    district: "၄ ခု",
    township: "၉ မြို့နယ်",
    popul: "၄၇၈,၈၀၁ ဦးရေ",
    img: ("../img/chin.svg"),
    url: ("https://my.wikipedia.org/wiki/%E1%80%81%E1%80%BB%E1%80%84%E1%80%BA%E1%80%B8%E1%80%95%E1%80%BC%E1%80%8A%E1%80%BA%E1%80%94%E1%80%9A%E1%80%BA"),
    website: ("https://chin.gov.mm")
},{
    name: "Bago",
    capital: "ပဲခူးမြို့",
    maps: "၃၉၄၀၂.၃ စတုရန်းကီလိုမီတာ",
    district: "၄ ခု",
    township: "၂၈ မြို့နယ်",
    popul: "၄,၈၆၇,၃၇၃ ဦးရေ",
    img: ("../img/Bago.svg"),
    url: ("https://my.wikipedia.org/wiki/%E1%80%95%E1%80%B2%E1%80%81%E1%80%B0%E1%80%B8%E1%80%90%E1%80%AD%E1%80%AF%E1%80%84%E1%80%BA%E1%80%B8%E1%80%92%E1%80%B1%E1%80%9E%E1%80%80%E1%80%BC%E1%80%AE%E1%80%B8"),
    website: ("https://bago.gov.mm")
},{
    name: "Sagaing",
    capital: "မုံရွာမြို့",
    maps: "၉၃၇၀၄.၅ စတုရန်းကီလိုမီတာ",
    district: "၁၁ ခု",
    township: "၃၇ မြို့နယ်",
    popul: "၅,၃၂၅,၃၄၇ ဦးရေ",
    img: ("../img/Sagaing.svg"),
    url: ("https://my.wikipedia.org/wiki/%E1%80%85%E1%80%85%E1%80%BA%E1%80%80%E1%80%AD%E1%80%AF%E1%80%84%E1%80%BA%E1%80%B8%E1%80%90%E1%80%AD%E1%80%AF%E1%80%84%E1%80%BA%E1%80%B8%E1%80%92%E1%80%B1%E1%80%9E%E1%80%80%E1%80%BC%E1%80%AE%E1%80%B8"),
    website: ("https://sagaing.gov.mm")
},{
    name: "Mandalay",
    capital: "မန္တလေးမြို့",
    maps: "၃၇၉၄၅.၆ စတုရန်းကီလိုမီတာ",
    district: "၇ ခု",
    township: "၂၈ မြို့နယ်",
    popul: "၆,၁၆၅,၇၂၃ ဦးရေ",
    img: ("../img/Mandalay.svg"),
    url: ("https://my.wikipedia.org/wiki/%E1%80%99%E1%80%94%E1%80%B9%E1%80%90%E1%80%9C%E1%80%B1%E1%80%B8%E1%80%90%E1%80%AD%E1%80%AF%E1%80%84%E1%80%BA%E1%80%B8%E1%80%92%E1%80%B1%E1%80%9E%E1%80%80%E1%80%BC%E1%80%AE%E1%80%B8"),
    website: ("https://mandalay.gov.mm")
},{
    name: "Magway",
    capital: "မကွေးမြို့",
    maps: "၄၄၈၂၀.၆ စတုရန်းကီလိုမီတာ",
    district: "၅ ခု",
    township: "၂၅ မြို့နယ်",
    popul: "၃,၉၁၇,၀၅၅ ဦးရေ",
    img: ("../img/Magway.svg"),
    url: ("https://my.wikipedia.org/wiki/%E1%80%99%E1%80%80%E1%80%BD%E1%80%B1%E1%80%B8%E1%80%90%E1%80%AD%E1%80%AF%E1%80%84%E1%80%BA%E1%80%B8%E1%80%92%E1%80%B1%E1%80%9E%E1%80%80%E1%80%BC%E1%80%AE%E1%80%B8"),
    website: ("https://magway.gov.mm")
},{
    name: "Ayeyarwady",
    capital: "ပုသိမ်မြို့",
    maps: "၃၅၁၄၀ စတုရန်းကီလိုမီတာ",
    district: "၆ ခု",
    township: "၂၆ မြို့နယ်",
    popul: "၆,၁၈၄,၈၂၉ ဦးရေ",
    img: ("../img/Ayeyarwady.svg"),
    url: ("https://my.wikipedia.org/wiki/%E1%80%A7%E1%80%9B%E1%80%AC%E1%80%9D%E1%80%90%E1%80%AE%E1%80%90%E1%80%AD%E1%80%AF%E1%80%84%E1%80%BA%E1%80%B8%E1%80%92%E1%80%B1%E1%80%9E%E1%80%80%E1%80%BC%E1%80%AE%E1%80%B8"),
    website: ("https://ayeyarwadyregion.gov.mm")
}];














allPath.forEach((x) => {
    let title = x.getAttribute('title');
    x.addEventListener('mouseover', () => {
        // place.innerText = title;
        city.forEach(function(el){
            if(title == el.name){
                console.log(el.estblishYear);
                img.src = el.img;
                place.innerText = title;
                capital.innerText = el.capital;
                map.innerText = el.maps;
                district.innerText = el.district;
                township.innerText = el.township;
                ppl.innerText = el.popul;
                details.attributes.href.value = el.url;
                cityName.innerText = title;
            }
        })
    });
});


