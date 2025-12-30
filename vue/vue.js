import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import { BannerCarousel } from './module/Carousel.js'

createApp({
    data() {
        return {
            message: '<span style="color: red">This should be red.</span>'
        }
    }
}).mount('#app');

// 啟動廣告圖輪播功能
BannerCarousel();