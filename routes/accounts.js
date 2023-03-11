const express = require('express')
const router = express.Router()


const accountsData = [

    {
        _id:101,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"7 Deadly sins",
        seller: "Liman",
        email: "liman@gmail.com",
        price: 1231,
        category: "Games",
        image: "https://imgs.search.brave.com/302syYKIjwqpVu__nzWxIP3dPYlaM2ZZACUv0kkvA48/rs:fit:300:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/WFNYUVp4dmVyTERC/V3loZ3lXaGt3QUFB/QSZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:102,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"7 Deadly sins",
        seller: "Voke_1",
        email: "kevo@gmail.com",
        price: 1300,
        category: "Games",
        image: "https://imgs.search.brave.com/WMv9PQrcDiqlzXMy1VOuTWaeKLemwZD6rkdz9bog1L0/rs:fit:300:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5r/SGwzTVdVdzlnbzlY/QXdSc2tiZTZnQUFB/QSZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:103,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"7 Deadly sins",
        seller: "Annie",
        email: "annie@gmail.com",
        price: 1200,
        category: "Games",
        image: "https://imgs.search.brave.com/sANR6ceLEoelxWQJ-wA1E31b__xk_9nrBdsh-HUdH-s/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/Zy1QbHBFQXFSUWxE/bGpZZURCLXFBSGFI/YSZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:104,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"7 Deadly sins",
        seller: "Esther",
        email: "exta@gmail.com",
        price: 1400,
        category: "Games",
        image: "https://imgs.search.brave.com/wKsgl_hB1xoYgiKmCPtXouEtKYZkrLxqTqinyMi9w_8/rs:fit:400:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5V/NkhONWFyQVNDY21l/X0k2S1JVR0R3QUFB/QSZwaWQ9QXBp",
        ratings:4,
       
    },


    {
        _id:105,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"7 Deadly sins",
        seller: "Vinnie",
        email: "vincent@gmail.com",
        price: 1400,
        category: "Games",
        image: "https://imgs.search.brave.com/_FzQfd025ON4LhY-YhY2Ov5JmVW0hWqj7ksrbemXHGQ/rs:fit:400:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5a/NGV3LTF6WjNXU2FQ/RGlVd0U2V3F3QUFB/QSZwaWQ9QXBp",
        ratings:4,
       
    },


    {
        _id:106,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Albion Online",
        seller: "Chege",
        email: "chege@gmail.com",
        price: 140,
        category: "Games",
        image: "https://imgs.search.brave.com/QHejoekSrtmKKCUt3VV8qutzaKLQrVvJekSjIS5yIH0/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/NktaNVJIZTNPTUpT/VkQyeFdrSWlnSGFF/byZwaWQ9QXBp",
        ratings:4,
       
    },


    {
        _id:107,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Albion online",
        seller: "Sam",
        email: "sammie@gmail.com",
        price: 102,
        category: "Games",
        image: "https://imgs.search.brave.com/YVq9k84ArObyRhnbiDNz4ehG3Adiho-ImwbmTnweR7Q/rs:fit:429:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5h/Ym5EQmdGR0hiQkhX/WmVBOVhoM2dnQUFB/QSZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:108,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Albion Online",
        seller: "Brian",
        email: "yobra@gmail.com",
        price: 140,
        category: "Games",
        image: "https://imgs.search.brave.com/jYSGmWDk69x6AR91RDgsTLIJVYtqRxZX9-cgCD6T-rg/rs:fit:622:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5N/U0o3Z1JFdE12Vl9m/SWhsRnQ5eXhnSGFG/cCZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:109,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Albion Online",
        seller: "Nick",
        email: "nick@gmail.com",
        price: 103,
        category: "Albion Online",
        image: "https://imgs.search.brave.com/jYSGmWDk69x6AR91RDgsTLIJVYtqRxZX9-cgCD6T-rg/rs:fit:622:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5N/U0o3Z1JFdE12Vl9m/SWhsRnQ5eXhnSGFG/cCZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:110,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Albion Online",
        seller: "JustHoe",
        email: "justoe@gmail.com",
        price: 104,
        category: "Games",
        image: "https://imgs.search.brave.com/sGErcVTVmGDKMbmGv2udatq0ALiGgmmQ1M5Mb-kXQLg/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC50/aDMxN2FOZFREREIy/YTRDdDdNZTZRSGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:111,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Albion Online",
        seller: "azpilicueta",
        email: "captain@gmail.com",
        price: 101,
        category: "Games",
        image: "https://imgs.search.brave.com/KVzkgtVs1usJmpueMkEGsx0hNuETTqbTqqgZKiKiBJA/rs:fit:592:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC41/NEE0eXVacmx3UWp1/RnFGSlVETWJnSGFG/NyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:112,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Apex Legends",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 100,
        category: "Games",
        image: "https://imgs.search.brave.com/QtLaSYzeW5e28z6Oq0uLnWqngWyLq5yt4pGQXhxG5d8/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC50/X2NlWWhkOGVpSDRY/YUVaZkZuOEpnSGFG/aiZwaWQ9QXBp",
        ratings:4,
       
    },


    {
        _id:113,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Apex Legends",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 140,
        category: "Games",
        image: "https://imgs.search.brave.com/m7fg2gPLDAvFvnoNaOf96_v0OYb2toqOqcRe5emROY4/rs:fit:877:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4y/NW9ZakQweEg5S0to/SHJJbmEzRFlRSGFF/QSZwaWQ9QXBp",
        ratings:4,
       
    },


    {
        _id:114,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Apex Legends",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 140,
        category: "Games",
        image: "https://imgs.search.brave.com/jekV0Wz0EwtAe8dEEt-WgcxwOombbKlF082DGIF--Qk/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5F/amt0TUQxZHhpWWhD/dHRWREJxTlpnSGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },


    {
        _id:115,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Artery Gear",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 180,
        category: "Games",
        image: "https://imgs.search.brave.com/HlBAJENQfbAtSGpS8oyr13l7EumOZlZR3YjK4L1DU4c/rs:fit:1069:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5K/UGpsOGJlNFN4ZlN1/cFRiZTRTWUdnSGFE/UyZwaWQ9QXBp",
        ratings:4,
       
    },


    {
        _id:116,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Artery Gear",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 180,
        category: "Games",
        image: "https://imgs.search.brave.com/ex41uZNnHRBChPoSPkhloShWhCGiXnfYJU2SCVif5co/rs:fit:976:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5k/RndETlVjSTBqMzB1/OXJpSXp0bXFBSGFE/bSZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:117,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Artery Gear",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 170,
        category: "Games",
        image: "https://imgs.search.brave.com/RJI7-YQYc5DWTNGJNHvLl1llCdsuC9E0KrpTpZKWEwM/rs:fit:1003:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5U/cGdyVndlVG9yS3J0/Sk1EbHJEaFNBSGFE/ZyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:118,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Artery Gear",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 140,
        category: "Games",
        image: "https://imgs.search.brave.com/ex41uZNnHRBChPoSPkhloShWhCGiXnfYJU2SCVif5co/rs:fit:976:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5k/RndETlVjSTBqMzB1/OXJpSXp0bXFBSGFE/bSZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:119,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Call of Duty Mobile",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 110,
        category: "Games",
        image: "https://imgs.search.brave.com/nG4F8NcJSXbPVOVkzjQKdkdql_NbuzIqihzsbsZR7T8/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5I/Y1JLZE9tNEhXaDNs/UjlzYnliWkJ3SGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:118,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Call of Duty Mobile",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 120,
        category: "Games",
        image: "https://imgs.search.brave.com/n28394bsoeuVZQG85IGgMRh7_L-C0KrXk8a11VaRCIQ/rs:fit:948:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5s/QUhlZWFhVUdXYWUw/Q3FjT1NsSDJ3SGFE/dCZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:119,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Call of Duty Mobile",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 140,
        category: "Games",
        image: "https://imgs.search.brave.com/n28394bsoeuVZQG85IGgMRh7_L-C0KrXk8a11VaRCIQ/rs:fit:948:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5s/QUhlZWFhVUdXYWUw/Q3FjT1NsSDJ3SGFE/dCZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:120,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Call of Duty Mobile",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 170,
        category: "Games",
        image: "https://imgs.search.brave.com/9KJFU9dMj31tdG0S8dEAN2yV4iXNJzR9AjuA_zh9ZIY/rs:fit:1030:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/U2Yxd3lkWl91Q29K/cG5KYjZyNzF3SGFE/YSZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:121,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Call of Duty Mobile",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 180,
        category: "Games",
        image: "https://imgs.search.brave.com/hqPnQIg1C59TojNnABkcTRw3Dc_uJy12IqRDkSDwmbo/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5E/aUxsaHBTS20tSkJk/SG5jQkNnWkVnSGFG/aiZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:122,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Call of Duty Mobile",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 140,
        category: "Games",
        image: "https://imgs.search.brave.com/WKw8nq3E7jrYRV5Zdi9wg8whCDfI0Ms129-4h35Z__U/rs:fit:1030:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC45/UEFKRWZtVGNWX3VY/R1hrQTdmN0R3SGFE/YSZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:123,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Call of Duty Mobile",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 130,
        category: "Games",
        image: "https://imgs.search.brave.com/5vUNntt6BbT-tXZVP81yAQQEgLoTaQFQUm4NZWvS2zk/rs:fit:976:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5l/T0JNdlgxNFdfZ1NJ/R1NYbHVxODFRSGFE/bSZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:124,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Cookie Run",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 130,
        category: "Games",
        image: "https://imgs.search.brave.com/uI1UA-pyIyK7d0oZmmNYzfOUi3nlF5af00rf26D23Ws/rs:fit:847:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5u/X1VIMklYWjZ3ai1I/Y3lkWkRLM2t3SGFF/SiZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:125,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Cookie Run",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 140,
        category: "Games",
        image: "https://imgs.search.brave.com/uZZymq5DMKMDM4Dqa8VseCFjtabhd8QjCRtlS1_KzYs/rs:fit:829:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4y/Slp4bHBKNDFpdlVr/SUQ2QWRJekZBSGFF/UCZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:126,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Cookie Run",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 102,
        category: "Games",
        image: "https://imgs.search.brave.com/sImM_ntoj9asYrNCkYKxxuz6YZn4kEm62zwzA3oEPRw/rs:fit:838:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5D/MjdFWHFJZWJkeG94/dVJGN3ItaE9nSGFF/TSZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:127,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Cookie Run",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 100,
        category: "Games",
        image: "https://imgs.search.brave.com/sImM_ntoj9asYrNCkYKxxuz6YZn4kEm62zwzA3oEPRw/rs:fit:838:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5D/MjdFWHFJZWJkeG94/dVJGN3ItaE9nSGFF/TSZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:128,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Cookie Run",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 140,
        category: "Games",
        image: "https://imgs.search.brave.com/MoUIdQ_5irX5_gfAAghnFQZ6nXs8ry9t15UPHOFi_Jc/rs:fit:851:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5s/T05pWURHel9MV09o/OEppUWg2YkNnSGFF/SSZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:129,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Elden Ring",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 140,
        category: "Games",
        image: "https://imgs.search.brave.com/WVqagJKzOtQjzgCJMFoBSNA9_Sr7TDc2bKm7uDv_Ehc/rs:fit:374:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Z/V1RPbzVXZ0NnNldz/Qm45WHVmN2lRSGFK/WSZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:130,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Elden Ring",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 400,
        category: "Games",
        image: "https://imgs.search.brave.com/DVeB8xbzEhaRBt5E8d6v8vhLdK56JBRwZTldd5hBpQ4/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5f/U0xiYmxRSjBBbWhH/aE5hdjduaWtBSGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:131,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Elden Ring",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 200,
        category: "Games",
        image: "https://imgs.search.brave.com/mMQ3riD5HybagRfCDtdDqKbr9ORT71yH-sHFcVgSSHg/rs:fit:905:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5h/YWxzZ05hazZsNEh4/WXloMmJRNm1RSGFE/NCZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:132,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Dream League Soccer",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 3,
        category: "Games",
        image: "https://imgs.search.brave.com/ZY00ezjuAM_EiImMtLuQ-EKpDQvett1ui1rwIV-uzKw/rs:fit:1016:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Z/czQtWm5UaU1xNDhS/SEUtNkNqRjRBSGFE/ZCZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:133,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Dream League Soccer",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 10,
        category: "Games",
        image: "https://imgs.search.brave.com/YOmn4dV_Qh68-vMkzRViklklKBHE-mFFZQGNIyfWoo0/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5N/Znl2VGZPdlZKNVZC/M2pYMGtFeGVnSGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:134,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Dream League Soccer",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 14,
        category: "Games",
        image: "https://imgs.search.brave.com/_BnHMwjEteQtwlry1P4PC3v5Liukmi0TLvu_uCVvfHk/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5S/cl9vcWNmYy03QzNM/WEQwZzVOMGVBSGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:135,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Dream League Soccer",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 20,
        category: "Games",
        image: "https://imgs.search.brave.com/rUDfSNtlVP5gPTVwE3amh_TzYGNVFbUT9DYEYF8D8vI/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC40/N25FbGJkY1BKdXgy/UGQ5X2FGM0dRSGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:136,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Dream League Soccer",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 10,
        category: "Games",
        image: "https://imgs.search.brave.com/rUDfSNtlVP5gPTVwE3amh_TzYGNVFbUT9DYEYF8D8vI/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC40/N25FbGJkY1BKdXgy/UGQ5X2FGM0dRSGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:137,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Fortnite",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 140,
        category: "Games",
        image: "https://imgs.search.brave.com/zs5IuzBiICr6jnhWuxDXGv_29hkIcGvh90TCGEsmoPI/rs:fit:355:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5h/Nm91a1pHckZZcHpL/dC1teGRVcUZRSGFK/NCZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:138,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Fortnite",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 120,
        category: "Games",
        image: "https://imgs.search.brave.com/kIdTKHZJIan79IdyN87_5cBZgNxBryz3zc5oJ0yZrEM/rs:fit:355:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5u/OW54S255bHdvcU5j/ek5vbkw1cUhnQUFB/QSZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:139,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Fortnite",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 40,
        category: "Games",
        image: "https://imgs.search.brave.com/hqdLN0JrS6xay1ulGFr8LT32EI6gpdesux_f3pzGlpk/rs:fit:647:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Z/YVZxQTVWbWQycmpn/OXhwQUFrX2V3SGFG/YiZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:140,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Fortnite",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 70,
        category: "Games",
        image: "https://imgs.search.brave.com/Qm4SvyMC0AiL7fZbbsNwdn8LxSGfxJjbTarD7A54I9I/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5H/NmV0bDJXV0ZBVG0t/YUR6dWs0bGdRSGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:141,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Fortnite",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 80,
        category: "Games",
        image: "https://imgs.search.brave.com/KANi5QKQ5pUBcB7cs67KhrX0yfdVAUas3WTcAuCR4OI/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC54/X1IyRTUwM2hfbEhT/Vjl2OHJuZUdRSGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:142,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Fortnite",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 100,
        category: "Games",
        image: "https://imgs.search.brave.com/JsXK66KqEwWDOMcezSOndk6Mx3xjhZ0S0O4dY6rv7Rk/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5U/ZTRZelZfUV9vRjZU/NDJadUF6YlhRSGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:143,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"FIFA 23",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 140,
        category: "Games",
        image: "https://imgs.search.brave.com/rD8EUoBDOdHTsCKFcX3j7ROskRKUeb1hs-95GziQPdA/rs:fit:533:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5l/UlNhZ1RIb2xnNHRo/OFI5NGlva09RQUFB/QSZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:144,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"FIFA 23",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 140,
        category: "Games",
        image: "https://imgs.search.brave.com/HeE5mKpr8wycvuuOgpk-gxFU2dA2mgDfKop1mzoCsc0/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/RE9YMTVaek1NOVlK/ZVRmUU90US1nQUFB/QSZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:145,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"FIFA 23",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 101,
        category: "Games",
        image: "https://imgs.search.brave.com/rjtzU7Dvyu0bk9bh4dpHDrge8DPUI2E8uVsTX6OfdtA/rs:fit:175:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/djBqVW9hUG1FMTkx/M3JCTUlNcEpRQUFB/QSZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:146,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"FIFA 23",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 123,
        category: "Games",
        image: "https://imgs.search.brave.com/sMfnmdmbRP4DMDqDj3iYxTx5mZ_7yJH76S3IU48ewek/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5X/T0s2bGhuYzBlZHFI/dnVkYU5NeHZnSGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:147,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"FIFA 23",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 220,
        category: "Games",
        image: "https://imgs.search.brave.com/0PS6GyPgWZeNYpsuqliilSxkqDB-KdxbplayXy-cuiQ/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5a/ZjFob0JsTHYwc1Jk/NE9sS2FUQ1N3SGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:148,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"FIFA 23",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 100,
        category: "Games",
        image: "https://imgs.search.brave.com/YUXaLcUb-zzLgIv-FCbJC45furp5GtyQqF03qHkkP8A/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5p/MlhHeTM0Mk1Ib0VZ/blNDX1Y2UGJBSGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:149,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"FIFA 23",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 10,
        category: "Games",
        image: "https://imgs.search.brave.com/X0g-FWgjlC-E4hgl53Zb529axZLkXUy2czB-Z4UjrWQ/rs:fit:948:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Z/cXdtSGstS3lPd0h4/bE1PQ2ZIZ0J3SGFE/dCZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:151,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"FIFA 23",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 100,
        category: "Games",
        image: "https://imgs.search.brave.com/rCvrLspdCii1TL6hKHWJsbs0GlEEk5eHFFiJ9eO2HuM/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5v/S055R0FHWTVHSFRy/bG1sdzI3R2x3SGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:152,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"FIFA 23",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 40,
        category: "Games",
        image: "https://imgs.search.brave.com/JNZzFwgI7DKIs7hcSJ6os53s6TdfQ4PQSwhJOmkKQzo/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5n/SkxmV3ZlQ20xTUoy/TUdnUTRObWNnSGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:153,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"PUBG Mobile",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 140,
        category: "Games",
        image: "https://imgs.search.brave.com/j77OsmLDP2peeD3C0vk5B0QI3lGGPLZyD3y4YKS_vb0/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5f/dFNpMnRObERjTldH/ZjdOWWhVdkF3SGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:154,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"PUBG Mobile",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 70,
        category: "Games",
        image: "https://imgs.search.brave.com/LfNhdYAIUEbF3h53cwYVKuMVScE9jmH8VA7ekOBchG4/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5w/S2ZlWXFHbXBzOW1P/dTZWNUg3d3VBSGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:155,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"PUBG Mobile",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 80,
        category: "Games",
        image: "https://imgs.search.brave.com/5Dt-TSe7VR-F3p3GYcFUMxzN4sSumQVqaEXqzWkn8AA/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/ek4zclVESVJuSkpx/N1R6Y0xQdHlnSGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:156,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"PUBG Mobile",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 120,
        category: "Games",
        image: "https://imgs.search.brave.com/PGPwK0_Dq4inibOqz8qHBxeMEeuxfEI5xFG0PQb0OYw/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5l/X1BxYk9LV19VdkdI/Rl9ZRnRna0t3SGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:157,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"PUBG Mobile",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 140,
        category: "Games",
        image: "https://imgs.search.brave.com/GIgOBWmD4RBbYHSS9jqngg-O7IqDOQyQ_hzxlCLRRn0/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/eHZfRWMybkhTd1RB/dTdPREk3NEN3SGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:158,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"PUBG Mobile",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 100,
        category: "Games",
        image: "https://imgs.search.brave.com/edpPTporsWIpC-TPh8NHW8LCOkqrTIESXK-0g8vKMB8/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5K/ZmFFc1lPUW5oZ0hn/c3dtQVlfQUlRSGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },


    {
        _id:159,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"PUBG Mobile",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 130,
        category: "Games",
        image: "https://imgs.search.brave.com/A2xPrq2mYsvUE-8lHGx6aGk1aNy2d2FBW9AQiWzxfh8/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/LXItYVB1WDVtYXl4/MXRqUk9ldDhBSGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:160,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"PUBG Mobile",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 130,
        category: "Games",
        image: "https://imgs.search.brave.com/LfNhdYAIUEbF3h53cwYVKuMVScE9jmH8VA7ekOBchG4/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5w/S2ZlWXFHbXBzOW1P/dTZWNUg3d3VBSGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:161,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Valorant",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 103,
        category: "Games",
        image: "https://imgs.search.brave.com/eTMkMXvR_7PjLfxsJBqNhd0o3iP-hRLtzkrUcktPkKI/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/M3Q3anZfOXE0dXBD/dm1YdEo1VDR3SGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:162,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Valorant",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 10,
        category: "Games",
        image: "https://imgs.search.brave.com/bHuGyfOVxdbrXrot9jk3SR6aVk2IaJMqIJOljc83gxs/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5V/UVF4X0Z5UTJYX2JU/TllvazNjMExnSGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:163,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Valorant",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 120,
        category: "Games",
        image: "https://imgs.search.brave.com/ECyIEEXuSnenPvOXjZzktkOc600mRAzQHtNU7nK-rds/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC40/MW41QXJVM2JmcmE2/aHN5bTJmRzJnSGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:164,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Valorant",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 101,
        category: "Games",
        image: "https://imgs.search.brave.com/ECyIEEXuSnenPvOXjZzktkOc600mRAzQHtNU7nK-rds/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC40/MW41QXJVM2JmcmE2/aHN5bTJmRzJnSGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:165,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Valorant",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 14,
        category: "Games",
        image: "https://imgs.search.brave.com/Db6T64JdxL9AiowEt-9OMbXrU7B8QPVoBQ0K384f-t4/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Z/clNZWWxjeUhGRjdx/QVVvUDRjb3lnSGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:166,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Valorant",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 28,
        category: "Games",
        image: "https://imgs.search.brave.com/9pXd0i9CMKaiTlX6WgpDu0kO1L2SmIexSlGZbn_H2No/rs:fit:841:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/Y2xJMWRDRXlCRVRK/bm82eURyNlVnSGFF/TCZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:167,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Valorant",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 32,
        category: "Games",
        image: "https://imgs.search.brave.com/yqSm7EXpBRtDJtDk3ELe17ptnIFmJwb0GQdhk0gwxZI/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC54/MW1iTnBYLW51M2tx/WXBPYjJmMUVRSGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:168,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Valorant",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 70,
        category: "Games",
        image: "https://imgs.search.brave.com/sgU6C0beTGkakPmx8m_3ovIWt8I2I7Ij_OKacxcNym8/rs:fit:985:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5S/WVJOQW8xTWM1Z2NW/Z0oxTkNnZTRnSGFE/ayZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:169,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Valorant",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 100,
        category: "Games",
        image: "https://imgs.search.brave.com/Rc7h1JGNeTLm0kHLg8_k_aQofrNLVtYpQWnrBqHqXd8/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4z/X2dENFNzXzZEVUNF/UGQxVnNORjlnSGFG/aiZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:170,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Valorant",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 140,
        category: "Games",
        image: "https://imgs.search.brave.com/F43jOuaAeOjWQsPiUlySjvn9hXsN-9vKQeX5wqJnvK4/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5B/eE5VeFV5V1VPTlFo/U2g5SGtPY3FBSGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },

    {
        _id:171,
        title:"game accounts",
        isNew: false,
        oldPrice: "130",
        description:"Valorant",
        seller: "Romaniac",
        email: "romaniac@gmail.com",
        price: 200,
        category: "Games",
        image: "https://imgs.search.brave.com/S0QSlwkqgm2w2oKdZRbT9hGS5gx0-unS1PwxkJ88Rb8/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Y/Q1Z2cER2QURJTGgw/VVZ3Tm81UUl3SGFF/SyZwaWQ9QXBp",
        ratings:4,
       
    },









]



router.get("/accounts", (req,res)=>{
    res.send(accountsData)
})

module.exports = router