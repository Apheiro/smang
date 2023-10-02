'use client';
import { MangaCard } from '../components/MangaCard';
import { MangaWideCard } from '../components/MangaWideCard';
import { format, intervalToDuration, sub } from 'date-fns';
import axios from 'axios';
import { PopularSlider } from '../components/PopularSlider';
import { SliderItem } from '../components/SliderItem';
const baseURL = 'https://api.mangadex.org'

// const info = axios({
//   method: 'get',
//   url: `${baseURL}/manga`,
//   params: {
//     limit: 10,
//     includes: ['cover_art', 'author'],
//     hasAvailableChapters: true,
//     createdAtSince: format(sub(new Date(), { days: 30 }), 'yyyy-MM-dd HH:mm:ss').replace(' ', 'T'),
//     contentRating: ['safe', 'suggestive'],
//     order: {
//       followedCount: 'desc',
//     }
//   }
// })

// info.then((res) => {
//   console.log(res.data)
// }).catch((err) => {
//   console.log(err)
// })

// const info = axios({
//   method: 'get',
//   url: `${baseURL}/chapter`,
//   params: {
//     // limit: 1,
//     ids: ['597854f2-53e1-4cc8-a276-ed4c8558e344'],
//     includes: ["scanlation_group"],
//   }
// })

// info.then((res) => {
//   console.log(res.data)
// }).catch((err) => {
//   console.log(err)
// })

const mostPopular = {
  "result": "ok",
  "response": "collection",
  "data": [
    {
      "id": "d65c0332-3764-4c89-84bd-b1a4e7278ad7",
      "type": "manga",
      "attributes": {
        "title": {
          "en": "Kagurabachi"
        },
        "altTitles": [
          {
            "ja": "カグラバチ"
          },
          {
            "ja-ro": "Kagurabachi"
          },
          {
            "ru": "Кагурабати"
          }
        ],
        "description": {
          "en": "Young Chihiro spends his days training under his famous swordsmith father. One day he hopes to become a great sword-maker himself. The goofy father and the serious son--they thought these days would last forever. But suddenly, tragedy strikes. A dark day soaked in blood. Chihiro and his blade now live only for revenge. Epic sword battle action!",
          "ru": "Юный Тихиро проводит дни, тренируясь под руководством своего знаменитого отца-мечника, который издавна изготавливает катаны для начала и конца войн. Однажды Тихиро надеется сам стать великим мастером мечей. Легкомысленный отец и серьезный сын — они думали, что эти спокойные дни будут длиться вечно. Но внезапно случается трагедия. Темный день, пропитанный кровью. Тихиро и его клинок теперь живут только ради мести...",
          "tr": "Genç Chihiro günlerini ünlü kılıç ustası babasının yanında eğitim alarak geçirmektedir. Bir gün kendisi de büyük bir kılıç ustası olmayı ummaktadır. Şapşal baba ve ciddi oğul, bugünlerin sonsuza dek süreceğini düşünmektedirler. Ama aniden bir trajedi yaşanır. Kana bulanmış karanlık bir gün. Chihiro ve kılıcı artık sadece intikam için yaşamaktadır. Destansı kılıç savaşı aksiyonu!"
        },
        "isLocked": false,
        "links": {
          "al": "169355",
          "ap": "kagurabachi",
          "kt": "kagurabachi",
          "mu": "rrlks4b",
          "mal": "162479",
          "raw": "https://shonenjumpplus.com/episode/14079602755222998036",
          "engtl": "https://mangaplus.shueisha.co.jp/titles/100274"
        },
        "originalLanguage": "ja",
        "lastVolume": "",
        "lastChapter": "",
        "publicationDemographic": "shounen",
        "status": "ongoing",
        "year": 2023,
        "contentRating": "safe",
        "tags": [
          {
            "id": "391b0423-d847-456f-aff0-8b0cfc03066b",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Action"
              },
              "description": {},
              "group": "genre",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "4d32cc48-9f00-4cca-9b5a-a839f0764984",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Comedy"
              },
              "description": {},
              "group": "genre",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "5ca48985-9a9d-4bd8-be29-80dc0303db72",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Crime"
              },
              "description": {},
              "group": "genre",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "81183756-1453-4c81-aa9e-f6e1b63be016",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Samurai"
              },
              "description": {},
              "group": "theme",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "85daba54-a71c-4554-8a28-9901a8b0afad",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Mafia"
              },
              "description": {},
              "group": "theme",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "a1f53773-c69a-4ce5-8cab-fffcd90b1565",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Magic"
              },
              "description": {},
              "group": "theme",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "eabc5b4c-6aff-42f3-b657-3e90cbd00b75",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Supernatural"
              },
              "description": {},
              "group": "theme",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "ee968100-4191-4968-93d3-f82d72be7e46",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Mystery"
              },
              "description": {},
              "group": "genre",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "f8f62932-27da-4fe4-8ee1-6779a8c5edba",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Tragedy"
              },
              "description": {},
              "group": "genre",
              "version": 1
            },
            "relationships": []
          }
        ],
        "state": "published",
        "chapterNumbersResetOnNewVolume": false,
        "createdAt": "2023-09-01T23:47:02+00:00",
        "updatedAt": "2023-09-23T09:26:46+00:00",
        "version": 14,
        "availableTranslatedLanguages": [
          "ar",
          "pt-br",
          "tr",
          "id",
          "cs",
          "vi",
          "ru",
          "fr",
          "it",
          "fa",
          "es-la",
          "pl"
        ],
        "latestUploadedChapter": "41bf66b1-a548-47f0-9ef3-7c6dd02424dd"
      },
      "relationships": [
        {
          "id": "15104c19-1608-4939-9d06-2996a0b4aa15",
          "type": "author",
          "attributes": {
            "name": "Hokazono Takeru",
            "imageUrl": null,
            "biography": {
              "en": "**Alt names**:\n外薗健"
            },
            "twitter": "https://twitter.com/8rQu0DnYjkr1LUC",
            "pixiv": null,
            "melonBook": null,
            "fanBox": null,
            "booth": null,
            "nicoVideo": null,
            "skeb": null,
            "fantia": null,
            "tumblr": null,
            "youtube": null,
            "weibo": null,
            "naver": null,
            "website": null,
            "createdAt": "2022-08-09T21:56:06+00:00",
            "updatedAt": "2023-09-20T21:14:21+00:00",
            "version": 2
          }
        },
        {
          "id": "15104c19-1608-4939-9d06-2996a0b4aa15",
          "type": "artist"
        },
        {
          "id": "f06b5d4c-adb4-4a1b-a2f0-bd71d40f9347",
          "type": "cover_art",
          "attributes": {
            "description": "",
            "volume": "0.1",
            "fileName": "3fa0e8cc-0e39-4cb8-8f25-d70fb86cf110.jpg",
            "locale": "ja",
            "createdAt": "2023-09-17T19:40:53+00:00",
            "updatedAt": "2023-09-25T10:49:49+00:00",
            "version": 3
          }
        },
        {
          "id": "fb03ae91-2304-4a1f-b9e2-6b5ba3313138",
          "type": "creator"
        }
      ]
    },
    {
      "id": "35e93249-6b90-438d-8955-591f15d352c1",
      "type": "manga",
      "attributes": {
        "title": {
          "en": "I Confessed to a Lone Wolf Girl"
        },
        "altTitles": [
          {
            "ja": "一匹狼な子に告白した"
          },
          {
            "ja-ro": "Ippiki Ookami na Ko ni Kokuhaku Shita"
          },
          {
            "ru": "Признание одинокой девушке"
          }
        ],
        "description": {
          "en": "A man confesses his love to a lone wolf girl.",
          "id": "seorang pria menyatakan cintanya pada seorang gadis serigala penyendiri",
          "ru": "Парень признается в любви одинокой девушке"
        },
        "isLocked": false,
        "links": {
          "raw": "https://twitter.com/kugatu28/status/1701524401114787875?s=19"
        },
        "originalLanguage": "ja",
        "lastVolume": "",
        "lastChapter": "",
        "publicationDemographic": null,
        "status": "ongoing",
        "year": 2023,
        "contentRating": "safe",
        "tags": [
          {
            "id": "423e2eae-a7a2-4a8b-ac03-a8351462d71d",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Romance"
              },
              "description": {},
              "group": "genre",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "caaa44eb-cd40-4177-b930-79d3ef2afe87",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "School Life"
              },
              "description": {},
              "group": "theme",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "e197df38-d0e7-43b5-9b09-2842d0c326dd",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Web Comic"
              },
              "description": {},
              "group": "format",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "e5301a23-ebd9-49dd-a0cb-2add944c7fe9",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Slice of Life"
              },
              "description": {},
              "group": "genre",
              "version": 1
            },
            "relationships": []
          }
        ],
        "state": "published",
        "chapterNumbersResetOnNewVolume": false,
        "createdAt": "2023-09-13T13:22:49+00:00",
        "updatedAt": "2023-09-26T08:07:20+00:00",
        "version": 7,
        "availableTranslatedLanguages": [
          "vi",
          "zh-hk",
          "pt-br",
          "ru",
          "en",
          "id"
        ],
        "latestUploadedChapter": "f17e8301-a429-4a5b-a8b7-e7ca27c3622e"
      },
      "relationships": [
        {
          "id": "8b910458-1344-4b6a-ae5c-935240cd3027",
          "type": "author",
          "attributes": {
            "name": "Kuga Tsuniya",
            "imageUrl": null,
            "biography": {
              "en": "**Alt names**:\n玖珂ツニヤ"
            },
            "twitter": "https://twitter.com/kugatu28",
            "pixiv": "https://www.pixiv.net/users/83024831",
            "melonBook": null,
            "fanBox": "https://kugatu28.fanbox.cc/",
            "booth": null,
            "nicoVideo": null,
            "skeb": null,
            "fantia": "https://fantia.jp/fanclubs/466877",
            "tumblr": null,
            "youtube": null,
            "weibo": null,
            "naver": null,
            "website": null,
            "createdAt": "2022-06-09T22:47:13+00:00",
            "updatedAt": "2023-05-13T00:31:10+00:00",
            "version": 6
          }
        },
        {
          "id": "8b910458-1344-4b6a-ae5c-935240cd3027",
          "type": "artist"
        },
        {
          "id": "0afb5c42-4c37-42c1-9063-13b3c792741b",
          "type": "cover_art",
          "attributes": {
            "description": "",
            "volume": "1",
            "fileName": "219c409d-f934-4b34-b4f3-363dfc1165ef.jpg",
            "locale": "ja",
            "createdAt": "2023-09-13T13:22:55+00:00",
            "updatedAt": "2023-09-13T13:22:55+00:00",
            "version": 1
          }
        },
        {
          "id": "8722b686-6eb8-4565-8072-faadfa8de713",
          "type": "manga",
          "related": "colored"
        },
        {
          "id": "906e407a-fca8-4512-9a9f-f93c79fcfd39",
          "type": "creator"
        }
      ]
    },
    {
      "id": "ba0dfa91-47cb-47eb-a374-fa1f5427ad89",
      "type": "manga",
      "attributes": {
        "title": {
          "en": "Crybaby Neighbour Gaiden: Takanashi-kun and Karasuma-san"
        },
        "altTitles": [
          {
            "ja-ro": "Batsu Naki Gaiden: Takanashi-kun to Karasuma-san"
          },
          {
            "ja": "バツ泣き外伝：小鳥遊くんと烏丸さん"
          }
        ],
        "description": {
          "en": "Story focused on the character Karasuma-san and Takanashi-kun who had their appearances in Batsuichide Nakimushina Otonari-san.",
          "pt-br": "A história se concentra nos personagens Karasuma-san e Takanashi-kun que tiveram suas aparições em Batsuichide Nakimushina Otonari-san."
        },
        "isLocked": false,
        "links": {
          "al": "169593",
          "raw": "https://twitter.com/zyugoya/status/1701150956027813969"
        },
        "originalLanguage": "ja",
        "lastVolume": "",
        "lastChapter": "",
        "publicationDemographic": null,
        "status": "ongoing",
        "year": 2023,
        "contentRating": "safe",
        "tags": [
          {
            "id": "423e2eae-a7a2-4a8b-ac03-a8351462d71d",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Romance"
              },
              "description": {},
              "group": "genre",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "4d32cc48-9f00-4cca-9b5a-a839f0764984",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Comedy"
              },
              "description": {},
              "group": "genre",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "e197df38-d0e7-43b5-9b09-2842d0c326dd",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Web Comic"
              },
              "description": {},
              "group": "format",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "e5301a23-ebd9-49dd-a0cb-2add944c7fe9",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Slice of Life"
              },
              "description": {},
              "group": "genre",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "f5ba408b-0e7a-484d-8d49-4e9125ac96de",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Full Color"
              },
              "description": {},
              "group": "format",
              "version": 1
            },
            "relationships": []
          }
        ],
        "state": "published",
        "chapterNumbersResetOnNewVolume": false,
        "createdAt": "2023-09-11T18:22:43+00:00",
        "updatedAt": "2023-09-24T22:26:41+00:00",
        "version": 8,
        "availableTranslatedLanguages": [
          "pt-br",
          "en"
        ],
        "latestUploadedChapter": "6c3aefbd-11ac-4467-9a45-2a6c7a2f03e1"
      },
      "relationships": [
        {
          "id": "71ee9e2d-d746-406b-a33d-24e53954d079",
          "type": "author",
          "attributes": {
            "name": "Zyugoya",
            "imageUrl": null,
            "biography": {
              "en": "**Alt names**:\nJuugoya\n十五夜"
            },
            "twitter": "https://twitter.com/zyugoya",
            "pixiv": "https://www.pixiv.net/users/1722837",
            "melonBook": null,
            "fanBox": "https://zyugoya.fanbox.cc/",
            "booth": null,
            "nicoVideo": null,
            "skeb": null,
            "fantia": "https://fantia.jp/fanclubs/61153",
            "tumblr": null,
            "youtube": null,
            "weibo": null,
            "naver": null,
            "website": null,
            "createdAt": "2021-04-19T21:59:45+00:00",
            "updatedAt": "2023-06-30T21:45:09+00:00",
            "version": 3
          }
        },
        {
          "id": "71ee9e2d-d746-406b-a33d-24e53954d079",
          "type": "artist"
        },
        {
          "id": "665a34da-55c9-479f-8d06-5572477be4f8",
          "type": "cover_art",
          "attributes": {
            "description": "",
            "volume": "1",
            "fileName": "e31475cb-858d-470f-a72d-ea7cfec8473b.jpg",
            "locale": "ja",
            "createdAt": "2023-09-11T18:22:46+00:00",
            "updatedAt": "2023-09-11T18:22:46+00:00",
            "version": 1
          }
        },
        {
          "id": "a892e04c-e20c-4fd3-9169-d620cee8dbd4",
          "type": "manga",
          "related": "main_story"
        },
        {
          "id": "cec304e4-dbe4-47b1-aa97-87afec9a201e",
          "type": "creator"
        }
      ]
    },
    {
      "id": "ce9e089e-b085-4e16-b41b-4a3343317572",
      "type": "manga",
      "attributes": {
        "title": {
          "en": "Torima Minshuku Yadori-teki na!"
        },
        "altTitles": [
          {
            "ja": "とりま民宿やどり的な"
          },
          {
            "ja-ro": "Torima Minshuku Yadori-teki na!"
          }
        ],
        "description": {
          "en": "\"Guest House Yadori\" is a seaside inn with a view of the Pacific Ocean.\n\nA 34-year old tanned gal is the proprietress who runs the inn. In an unexpected turn of events, a university student named Youichi Sakimori ends up freeloading there. The playful and alluring proprietress Hana Yadori has him dancing in her palms from morning til night...!?\n\n(Source: Grand Jump)",
          "ja": "太平洋が見える海辺の宿「民宿やどり」。\n34歳の黒ギャル若女将が切り盛りするその宿に、ひょんなことから居候するハメになった大学生の崎守葉一は、\n悪戯好きで蠱惑的な女将・夜杼里波奈（やどり・はな）さんに朝から晩まで振り回されっぱなしで…!?\n『ストライク・オア・ガター』の俊英が贈るイチャコラ居候ラブコメ！"
        },
        "isLocked": false,
        "links": {
          "al": "168348",
          "ap": "torima-minshuku-yadori-teki-na",
          "kt": "torima-minshuku-yadori-teki-na",
          "mu": "wgeu42m",
          "mal": "162514",
          "raw": "http://grandjump.shueisha.co.jp/manga/torima.html"
        },
        "originalLanguage": "ja",
        "lastVolume": "",
        "lastChapter": "",
        "publicationDemographic": "seinen",
        "status": "ongoing",
        "year": 2023,
        "contentRating": "safe",
        "tags": [
          {
            "id": "423e2eae-a7a2-4a8b-ac03-a8351462d71d",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Romance"
              },
              "description": {},
              "group": "genre",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "4d32cc48-9f00-4cca-9b5a-a839f0764984",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Comedy"
              },
              "description": {},
              "group": "genre",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "e5301a23-ebd9-49dd-a0cb-2add944c7fe9",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Slice of Life"
              },
              "description": {},
              "group": "genre",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "fad12b5e-68ba-460e-b933-9ae8318f5b65",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Gyaru"
              },
              "description": {},
              "group": "theme",
              "version": 1
            },
            "relationships": []
          }
        ],
        "state": "published",
        "chapterNumbersResetOnNewVolume": false,
        "createdAt": "2023-09-05T17:46:58+00:00",
        "updatedAt": "2023-09-30T14:10:34+00:00",
        "version": 19,
        "availableTranslatedLanguages": [
          "pt-br",
          "es-la",
          "en",
          "id"
        ],
        "latestUploadedChapter": "baf0f6e7-1ec7-4919-95d7-ff2d79eb74f1"
      },
      "relationships": [
        {
          "id": "6fad4d31-a9d1-4c98-a5a5-c75290871236",
          "type": "author",
          "attributes": {
            "name": "Andou Yuu",
            "imageUrl": null,
            "biography": {
              "en": "**Alt names**:\nAndo Yu\n安藤優"
            },
            "twitter": "https://twitter.com/and_you_0715",
            "pixiv": null,
            "melonBook": null,
            "fanBox": null,
            "booth": null,
            "nicoVideo": null,
            "skeb": null,
            "fantia": null,
            "tumblr": null,
            "youtube": null,
            "weibo": null,
            "naver": null,
            "website": null,
            "createdAt": "2021-04-19T21:59:45+00:00",
            "updatedAt": "2023-09-11T19:08:10+00:00",
            "version": 5
          }
        },
        {
          "id": "6fad4d31-a9d1-4c98-a5a5-c75290871236",
          "type": "artist"
        },
        {
          "id": "1cf4936c-e9ba-4b0c-90c9-dbb8ed167281",
          "type": "cover_art",
          "attributes": {
            "description": "",
            "volume": "1",
            "fileName": "4182ca5a-dc9c-4a7e-8c18-494405f97f0c.jpg",
            "locale": "ja",
            "createdAt": "2023-09-05T17:46:59+00:00",
            "updatedAt": "2023-09-05T17:46:59+00:00",
            "version": 1
          }
        },
        {
          "id": "a449e779-d748-4e41-ba78-a6999b382589",
          "type": "creator"
        }
      ]
    },
    {
      "id": "40c12869-5686-4e21-9048-39882a026858",
      "type": "manga",
      "attributes": {
        "title": {
          "en": "Ore no Ie no Koakuma Imouto"
        },
        "altTitles": [
          {
            "ja": "俺の家の小悪魔妹"
          },
          {
            "ja-ro": "Ore no Ie no Koakuma Imouto"
          },
          {
            "en": "Little Devil Sister In My House"
          },
          {
            "en": "The Little Devil Younger Sister in My House"
          }
        ],
        "description": {
          "en": "Mao-chan is a cheeky high school girl who loves to tease her virgin big (step)brother in naughty ways. \n\nHowever, her true intention is actually...?\n\n(Source: [BookLive](https://booklive.jp/product/index/title_id/20063387/vol_no/001))\n\n---\n\nNote: the original Pixiv series has been collected and published into 2 volumes.\nVolume 1 (上) \"Up\" contains chapters 1-20. Volume 2 (下) \"Down\" contains chapters 21-42.",
          "ja": "真桜(まお)ちゃんは童貞のお兄ちゃんをえっちにからかうのが大好きな生意気JK。だけどその本意は実は…?"
        },
        "isLocked": false,
        "links": {
          "al": "169152",
          "ap": "ore-no-ie-no-koakuma-imouto",
          "bw": "series/428187/list",
          "mu": "vzgdae2",
          "ebj": "https://ebookjapan.yahoo.co.jp/books/777993/",
          "raw": "https://www.pixiv.net/en/artworks/97853728"
        },
        "originalLanguage": "ja",
        "lastVolume": "2",
        "lastChapter": "42",
        "publicationDemographic": null,
        "status": "completed",
        "year": 2022,
        "contentRating": "suggestive",
        "tags": [
          {
            "id": "423e2eae-a7a2-4a8b-ac03-a8351462d71d",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Romance"
              },
              "description": {},
              "group": "genre",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "4d32cc48-9f00-4cca-9b5a-a839f0764984",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Comedy"
              },
              "description": {},
              "group": "genre",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "e197df38-d0e7-43b5-9b09-2842d0c326dd",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Web Comic"
              },
              "description": {},
              "group": "format",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "e5301a23-ebd9-49dd-a0cb-2add944c7fe9",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Slice of Life"
              },
              "description": {},
              "group": "genre",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "f5ba408b-0e7a-484d-8d49-4e9125ac96de",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Full Color"
              },
              "description": {},
              "group": "format",
              "version": 1
            },
            "relationships": []
          }
        ],
        "state": "published",
        "chapterNumbersResetOnNewVolume": false,
        "createdAt": "2023-09-09T10:25:58+00:00",
        "updatedAt": "2023-09-23T15:23:17+00:00",
        "version": 12,
        "availableTranslatedLanguages": [
          "ru",
          "en",
          "fr",
          "es-la"
        ],
        "latestUploadedChapter": "85ec068c-d6d6-40ad-aca8-95750f80280b"
      },
      "relationships": [
        {
          "id": "2a8a3366-6566-4f6a-8a5e-51c95dc41413",
          "type": "author",
          "attributes": {
            "name": "Shibano Nanao",
            "imageUrl": null,
            "biography": {
              "en": "**Native name**: 芝野ななお\n\n**Circle name**: Nanahoshi (Maroniso)\n\n**Alt. names**:\nMaroniso\nまろにそ\nNanahoshi (Maroniso)\nNanahoshi (まろにそ)"
            },
            "twitter": "https://twitter.com/shibanonanao",
            "pixiv": "https://www.pixiv.net/en/users/1435383",
            "melonBook": null,
            "fanBox": "https://shibanooo.fanbox.cc/",
            "booth": "https://uramakaron.booth.pm/",
            "nicoVideo": null,
            "skeb": null,
            "fantia": null,
            "tumblr": null,
            "youtube": null,
            "weibo": null,
            "naver": null,
            "website": "http://maronyy.blog.fc2.com/",
            "createdAt": "2021-04-19T21:59:45+00:00",
            "updatedAt": "2023-09-14T01:22:53+00:00",
            "version": 6
          }
        },
        {
          "id": "2a8a3366-6566-4f6a-8a5e-51c95dc41413",
          "type": "artist"
        },
        {
          "id": "5327035e-8f94-4822-ad29-0c4abaedf56b",
          "type": "cover_art",
          "attributes": {
            "description": "Cover from BookLive",
            "volume": "1",
            "fileName": "2a23ea31-e181-4be4-b4a5-6f493e7241fa.jpg",
            "locale": "ja",
            "createdAt": "2023-09-09T10:26:04+00:00",
            "updatedAt": "2023-09-09T10:26:04+00:00",
            "version": 1
          }
        },
        {
          "id": "61532739-0ea8-43fb-a472-e902b37c2657",
          "type": "manga",
          "related": "alternate_story"
        },
        {
          "id": "61532739-0ea8-43fb-a472-e902b37c2657",
          "type": "manga",
          "related": "doujinshi"
        },
        {
          "id": "84b78a75-e383-4301-a57f-f4fdbc6cb48a",
          "type": "manga",
          "related": "sequel"
        },
        {
          "id": "c4ee0e05-b2f7-40c3-a910-c5b235468f2c",
          "type": "creator"
        }
      ]
    },
    {
      "id": "d25973ae-bcc3-4b88-a069-1cebab3f3099",
      "type": "manga",
      "attributes": {
        "title": {
          "en": "Uchuujin no Kakushigoto"
        },
        "altTitles": [
          {
            "ja": "宇宙人のかくしごと"
          },
          {
            "en": "Extraterrestrial Secrets"
          },
          {
            "zh-hk": "外星人的隱瞞之事"
          }
        ],
        "description": {
          "en": "The girl I fell in love with is… an alien!? I, the class president, happened to fall in love with my classmate, the eccentric Haru. I confessed my feelings, but her true identity was an extraterrestrial who came to Earth to survey it. “I still like you!” I started going out with Haru, but I have a further “secret” to keep…"
        },
        "isLocked": false,
        "links": {
          "al": "169393",
          "ap": "uchuujin-no-kakushigoto",
          "kt": "uchuujin-no-kakushigoto",
          "mu": "ffh0zut",
          "mal": "162905",
          "raw": "https://yanmaga.jp/comics/%E5%AE%87%E5%AE%99%E4%BA%BA%E3%81%AE%E3%81%8B%E3%81%8F%E3%81%97%E3%81%94%E3%81%A8"
        },
        "originalLanguage": "ja",
        "lastVolume": "",
        "lastChapter": "",
        "publicationDemographic": "seinen",
        "status": "ongoing",
        "year": 2023,
        "contentRating": "safe",
        "tags": [
          {
            "id": "256c8bd9-4904-4360-bf4f-508a76d67183",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Sci-Fi"
              },
              "description": {},
              "group": "genre",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "423e2eae-a7a2-4a8b-ac03-a8351462d71d",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Romance"
              },
              "description": {},
              "group": "genre",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "4d32cc48-9f00-4cca-9b5a-a839f0764984",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Comedy"
              },
              "description": {},
              "group": "genre",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "b29d6a3d-1569-4e7a-8caf-7557bc92cd5d",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Gore"
              },
              "description": {},
              "group": "content",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "b9af3a63-f058-46de-a9a0-e0c13906197a",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Drama"
              },
              "description": {},
              "group": "genre",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "caaa44eb-cd40-4177-b930-79d3ef2afe87",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "School Life"
              },
              "description": {},
              "group": "theme",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "e197df38-d0e7-43b5-9b09-2842d0c326dd",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Web Comic"
              },
              "description": {},
              "group": "format",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "e64f6742-c834-471d-8d72-dd51fc02b835",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Aliens"
              },
              "description": {},
              "group": "theme",
              "version": 1
            },
            "relationships": []
          }
        ],
        "state": "published",
        "chapterNumbersResetOnNewVolume": false,
        "createdAt": "2023-09-03T19:13:37+00:00",
        "updatedAt": "2023-09-27T16:07:02+00:00",
        "version": 12,
        "availableTranslatedLanguages": [
          "en"
        ],
        "latestUploadedChapter": "adba16f3-f8c4-4b9b-85ff-662a5cae6d72"
      },
      "relationships": [
        {
          "id": "3d3dc3e4-97d5-4e07-9ebe-4490eabe1257",
          "type": "author",
          "attributes": {
            "name": "Hamita",
            "imageUrl": null,
            "biography": {
              "en": "Native name: ハミタ"
            },
            "twitter": "https://twitter.com/hamita1220",
            "pixiv": "https://www.pixiv.net/en/users/6667588",
            "melonBook": null,
            "fanBox": "https://www.fanbox.cc/@hamita1220",
            "booth": null,
            "nicoVideo": null,
            "skeb": null,
            "fantia": null,
            "tumblr": null,
            "youtube": "https://www.youtube.com/channel/UCp9hTcWw62un10cM-CvK9BQ",
            "weibo": null,
            "naver": null,
            "website": null,
            "createdAt": "2021-04-19T21:59:45+00:00",
            "updatedAt": "2023-04-04T09:26:36+00:00",
            "version": 4
          }
        },
        {
          "id": "3d3dc3e4-97d5-4e07-9ebe-4490eabe1257",
          "type": "artist"
        },
        {
          "id": "1e2c151a-c85d-46ac-81fc-9da9e3d2c7ae",
          "type": "cover_art",
          "attributes": {
            "description": "",
            "volume": null,
            "fileName": "e378323e-cbdd-4189-90d2-7e0d391d94a5.jpg",
            "locale": "ja",
            "createdAt": "2023-09-03T19:13:39+00:00",
            "updatedAt": "2023-09-03T19:13:39+00:00",
            "version": 1
          }
        },
        {
          "id": "c7f8bde1-e85a-4fb0-994a-ea0f6c56f2b0",
          "type": "creator"
        }
      ]
    },
    {
      "id": "f7d3a91a-f47a-43ce-9a2c-4da813b15eea",
      "type": "manga",
      "attributes": {
        "title": {
          "en": "My Dog Becomes a Human"
        },
        "altTitles": [
          {
            "ja": "犬がヒトになる話"
          },
          {
            "ja-ro": "Inu ga Hito ni Naru Hanashi"
          },
          {
            "fr": "Mon Chien Est Devenu Humain"
          },
          {
            "zh-hk": "我家碰太變成了人類這件事"
          }
        ],
        "description": {
          "en": "One day, pet dogs in this town suddenly become human being. The story follows the life of Saki, owner, and Ponta, her dog.",
          "fr": "Un jour, les chiens de cette ville sont soudainement devenus humains. L'histoire suit la vie de Saki et de son chien Ponta."
        },
        "isLocked": false,
        "links": {
          "al": "169691",
          "mu": "eg5nty5",
          "raw": "https://twitter.com/granfamiliaKH"
        },
        "originalLanguage": "ja",
        "lastVolume": "",
        "lastChapter": "",
        "publicationDemographic": null,
        "status": "ongoing",
        "year": 2023,
        "contentRating": "safe",
        "tags": [
          {
            "id": "3de8c75d-8ee3-48ff-98ee-e20a65c86451",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Animals"
              },
              "description": {},
              "group": "theme",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "4d32cc48-9f00-4cca-9b5a-a839f0764984",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Comedy"
              },
              "description": {},
              "group": "genre",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "e197df38-d0e7-43b5-9b09-2842d0c326dd",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Web Comic"
              },
              "description": {},
              "group": "format",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "e5301a23-ebd9-49dd-a0cb-2add944c7fe9",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Slice of Life"
              },
              "description": {},
              "group": "genre",
              "version": 1
            },
            "relationships": []
          }
        ],
        "state": "published",
        "chapterNumbersResetOnNewVolume": false,
        "createdAt": "2023-09-10T03:08:42+00:00",
        "updatedAt": "2023-09-27T22:23:58+00:00",
        "version": 9,
        "availableTranslatedLanguages": [
          "zh-hk",
          "uk",
          "ru",
          "fr",
          "en",
          "id",
          "vi",
          "pt-br",
          "pl"
        ],
        "latestUploadedChapter": "c4806dcf-5a83-491e-9871-8ac2de4a5acd"
      },
      "relationships": [
        {
          "id": "00135499-3a0e-43e3-a9a4-8b3b62bc9ce6",
          "type": "author",
          "attributes": {
            "name": "Hamada Kenji",
            "imageUrl": null,
            "biography": {
              "en": "**Alt names**:\n濱田賢治"
            },
            "twitter": "https://twitter.com/granfamiliaKH",
            "pixiv": null,
            "melonBook": null,
            "fanBox": null,
            "booth": null,
            "nicoVideo": null,
            "skeb": null,
            "fantia": null,
            "tumblr": null,
            "youtube": null,
            "weibo": null,
            "naver": null,
            "website": null,
            "createdAt": "2022-04-27T08:27:47+00:00",
            "updatedAt": "2023-09-13T01:54:30+00:00",
            "version": 5
          }
        },
        {
          "id": "00135499-3a0e-43e3-a9a4-8b3b62bc9ce6",
          "type": "artist"
        },
        {
          "id": "172c1bd1-06df-44cb-aa45-3810b8cac331",
          "type": "cover_art",
          "attributes": {
            "description": "",
            "volume": "1",
            "fileName": "14c736e8-8a07-44ed-b2a7-61987ef02c33.jpg",
            "locale": "ja",
            "createdAt": "2023-09-10T03:08:58+00:00",
            "updatedAt": "2023-09-10T03:08:58+00:00",
            "version": 1
          }
        },
        {
          "id": "08208cf3-8ff4-4045-ad87-7055001803cd",
          "type": "creator"
        }
      ]
    },
    {
      "id": "7a9c05dc-ea1f-4656-8025-7a4729c51c3d",
      "type": "manga",
      "attributes": {
        "title": {
          "en": "Munou na Bocchan ni Yasashii Maid-san"
        },
        "altTitles": [
          {
            "ja": "無能な坊ちゃんに優しいメイドさん"
          },
          {
            "ja-ro": "Munou na Bocchan ni Yasashii Maid-san"
          },
          {
            "en": "The Incompetent Young Master Has a Kind Maid"
          }
        ],
        "description": {
          "en": "New series from Kuga Tsuniya of recent [Azadarake no Classmate ga Shinpai de](https://mangadex.org/title/17447693-cb65-493d-8e21-dafb22d8340f/azadarake-no-classmate-ga-shinpai-de) fame.\n\nNote: I don't know how to tag it yet, so take any tags with a grain of salt. -Osis\nNote: False alarm, everyone. I don't think there's any more of this one coming. -Osis"
        },
        "isLocked": false,
        "links": {
          "raw": "https://twitter.com/kugatu28"
        },
        "originalLanguage": "ja",
        "lastVolume": "",
        "lastChapter": "",
        "publicationDemographic": null,
        "status": "ongoing",
        "year": 2023,
        "contentRating": "safe",
        "tags": [
          {
            "id": "b9af3a63-f058-46de-a9a0-e0c13906197a",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Drama"
              },
              "description": {},
              "group": "genre",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "e197df38-d0e7-43b5-9b09-2842d0c326dd",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Web Comic"
              },
              "description": {},
              "group": "format",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "e5301a23-ebd9-49dd-a0cb-2add944c7fe9",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Slice of Life"
              },
              "description": {},
              "group": "genre",
              "version": 1
            },
            "relationships": []
          }
        ],
        "state": "published",
        "chapterNumbersResetOnNewVolume": false,
        "createdAt": "2023-09-04T08:56:04+00:00",
        "updatedAt": "2023-09-25T22:17:17+00:00",
        "version": 8,
        "availableTranslatedLanguages": [
          "vi",
          "fr",
          "id",
          "es",
          "ru",
          "en",
          "pt-br"
        ],
        "latestUploadedChapter": "ef173cb1-92dc-4bd7-b68d-aa941d0fb848"
      },
      "relationships": [
        {
          "id": "8b910458-1344-4b6a-ae5c-935240cd3027",
          "type": "author",
          "attributes": {
            "name": "Kuga Tsuniya",
            "imageUrl": null,
            "biography": {
              "en": "**Alt names**:\n玖珂ツニヤ"
            },
            "twitter": "https://twitter.com/kugatu28",
            "pixiv": "https://www.pixiv.net/users/83024831",
            "melonBook": null,
            "fanBox": "https://kugatu28.fanbox.cc/",
            "booth": null,
            "nicoVideo": null,
            "skeb": null,
            "fantia": "https://fantia.jp/fanclubs/466877",
            "tumblr": null,
            "youtube": null,
            "weibo": null,
            "naver": null,
            "website": null,
            "createdAt": "2022-06-09T22:47:13+00:00",
            "updatedAt": "2023-05-13T00:31:10+00:00",
            "version": 6
          }
        },
        {
          "id": "8b910458-1344-4b6a-ae5c-935240cd3027",
          "type": "artist"
        },
        {
          "id": "2adcaa76-1992-465a-8d79-ebec1e3790a1",
          "type": "cover_art",
          "attributes": {
            "description": "",
            "volume": "1",
            "fileName": "f0c125a3-8660-45a8-99f0-ebb8e6c751a7.jpg",
            "locale": "ja",
            "createdAt": "2023-09-04T08:56:11+00:00",
            "updatedAt": "2023-09-04T08:56:11+00:00",
            "version": 1
          }
        },
        {
          "id": "26b6801d-d52e-43d4-ab43-d2130683727d",
          "type": "manga",
          "related": "colored"
        },
        {
          "id": "74ac52ef-e8c5-4fad-836e-ecf07094c3aa",
          "type": "creator"
        }
      ]
    },
    {
      "id": "882bbc63-9ae6-4f2e-a666-af2eba79c8c9",
      "type": "manga",
      "attributes": {
        "title": {
          "en": "Non Milk - Milk Coffee The Series"
        },
        "altTitles": [
          {
            "vi": "Bạc xỉu không sữa"
          }
        ],
        "description": {
          "en": "A male office worker falls in love with the owner of a small coffee shop in a corner of the big city"
        },
        "isLocked": false,
        "links": {
          "kt": "non-milk-milk-coffee",
          "raw": "https://www.facebook.com/senukin.69/"
        },
        "originalLanguage": "vi",
        "lastVolume": "",
        "lastChapter": "",
        "publicationDemographic": null,
        "status": "ongoing",
        "year": 2023,
        "contentRating": "suggestive",
        "tags": [
          {
            "id": "423e2eae-a7a2-4a8b-ac03-a8351462d71d",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Romance"
              },
              "description": {},
              "group": "genre",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "4d32cc48-9f00-4cca-9b5a-a839f0764984",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Comedy"
              },
              "description": {},
              "group": "genre",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "891cf039-b895-47f0-9229-bef4c96eccd4",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Self-Published"
              },
              "description": {},
              "group": "format",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "e5301a23-ebd9-49dd-a0cb-2add944c7fe9",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Slice of Life"
              },
              "description": {},
              "group": "genre",
              "version": 1
            },
            "relationships": []
          }
        ],
        "state": "published",
        "chapterNumbersResetOnNewVolume": false,
        "createdAt": "2023-09-03T11:51:52+00:00",
        "updatedAt": "2023-09-27T07:42:08+00:00",
        "version": 5,
        "availableTranslatedLanguages": [
          "en",
          "fr",
          "pt-br"
        ],
        "latestUploadedChapter": "ae2a5e70-2fc3-42e3-bbfa-012ad230ba8d"
      },
      "relationships": [
        {
          "id": "1d363617-ca81-49cf-996b-38f3e2148f8a",
          "type": "author",
          "attributes": {
            "name": "Glutamat",
            "imageUrl": null,
            "biography": {},
            "twitter": null,
            "pixiv": null,
            "melonBook": null,
            "fanBox": null,
            "booth": null,
            "nicoVideo": null,
            "skeb": null,
            "fantia": null,
            "tumblr": null,
            "youtube": null,
            "weibo": null,
            "naver": null,
            "website": null,
            "createdAt": "2023-08-30T16:24:37+00:00",
            "updatedAt": "2023-08-30T16:24:37+00:00",
            "version": 1
          }
        },
        {
          "id": "ca95f016-1c53-41d7-9f23-4f3487ddade2",
          "type": "author",
          "attributes": {
            "name": "Senukin",
            "imageUrl": null,
            "biography": {},
            "twitter": "https://twitter.com/senukin69",
            "pixiv": "https://www.pixiv.net/users/27940627",
            "melonBook": null,
            "fanBox": null,
            "booth": null,
            "nicoVideo": null,
            "skeb": null,
            "fantia": null,
            "tumblr": null,
            "youtube": null,
            "weibo": null,
            "naver": null,
            "website": "https://www.facebook.com/senukin.69",
            "createdAt": "2023-04-14T09:34:03+00:00",
            "updatedAt": "2023-08-03T15:26:16+00:00",
            "version": 5
          }
        },
        {
          "id": "1d363617-ca81-49cf-996b-38f3e2148f8a",
          "type": "artist"
        },
        {
          "id": "ca95f016-1c53-41d7-9f23-4f3487ddade2",
          "type": "artist"
        },
        {
          "id": "634e840c-f5a9-479a-83c6-9844f1849b5b",
          "type": "cover_art",
          "attributes": {
            "description": "",
            "volume": "1",
            "fileName": "bd90508d-7619-481e-a991-554e1460fc8f.png",
            "locale": "vi",
            "createdAt": "2023-09-03T11:52:15+00:00",
            "updatedAt": "2023-09-03T11:52:15+00:00",
            "version": 1
          }
        },
        {
          "id": "2ea10260-9d99-45d8-8add-8c47e8e53f8c",
          "type": "manga",
          "related": "preserialization"
        },
        {
          "id": "e3c66bb2-8b76-4ca4-8ea2-cc2d27cc6421",
          "type": "creator"
        }
      ]
    },
    {
      "id": "334fecc8-8bff-4256-834a-9429059c0f72",
      "type": "manga",
      "attributes": {
        "title": {
          "en": "Mikudashi Ibari wa Mikudashitai!"
        },
        "altTitles": [
          {
            "ja": "見下いばりは見下したい！"
          },
          {
            "en": "Mikudashi Ibari Wants to Look Down on Him"
          },
          {
            "ja-ro": "Mikudashi Ibari ha Mikudashitai!"
          }
        ],
        "description": {
          "en": "No man is immune to Mikudashi Ibari's beautiful looks and perfect style... Save for the gloomy loner, Yonekura! A love comedy about a beautiful girl ruined by a problematic personality trying to prove her superiority through sexiness to a gloomy boy!"
        },
        "isLocked": false,
        "links": {
          "al": "154856",
          "ap": "mikudashi-ibari-wa-mikudashitai",
          "bw": "series/425786",
          "amz": "https://www.amazon.co.jp/dp/B0CBMYF1PK",
          "cdj": "https://www.cdjapan.co.jp/product/NEOBK-2868920",
          "ebj": "https://ebookjapan.yahoo.co.jp/books/772784/",
          "mal": "162865"
        },
        "originalLanguage": "ja",
        "lastVolume": "",
        "lastChapter": "",
        "publicationDemographic": "seinen",
        "status": "ongoing",
        "year": 2022,
        "contentRating": "suggestive",
        "tags": [
          {
            "id": "423e2eae-a7a2-4a8b-ac03-a8351462d71d",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Romance"
              },
              "description": {},
              "group": "genre",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "4d32cc48-9f00-4cca-9b5a-a839f0764984",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Comedy"
              },
              "description": {},
              "group": "genre",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "caaa44eb-cd40-4177-b930-79d3ef2afe87",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "School Life"
              },
              "description": {},
              "group": "theme",
              "version": 1
            },
            "relationships": []
          },
          {
            "id": "e5301a23-ebd9-49dd-a0cb-2add944c7fe9",
            "type": "tag",
            "attributes": {
              "name": {
                "en": "Slice of Life"
              },
              "description": {},
              "group": "genre",
              "version": 1
            },
            "relationships": []
          }
        ],
        "state": "published",
        "chapterNumbersResetOnNewVolume": false,
        "createdAt": "2023-09-15T19:24:35+00:00",
        "updatedAt": "2023-09-29T02:16:06+00:00",
        "version": 10,
        "availableTranslatedLanguages": [
          "en",
          "es-la"
        ],
        "latestUploadedChapter": "25a963a9-0818-440c-a667-1f58665a2ef3"
      },
      "relationships": [
        {
          "id": "4b3dbff4-41c2-4fe6-965b-92e192cee6e6",
          "type": "author",
          "attributes": {
            "name": "Aiue Okaki",
            "imageUrl": null,
            "biography": {},
            "twitter": null,
            "pixiv": null,
            "melonBook": null,
            "fanBox": null,
            "booth": null,
            "nicoVideo": null,
            "skeb": null,
            "fantia": null,
            "tumblr": null,
            "youtube": null,
            "weibo": null,
            "naver": null,
            "website": null,
            "createdAt": "2021-10-27T21:24:02+00:00",
            "updatedAt": "2021-10-27T21:24:02+00:00",
            "version": 1
          }
        },
        {
          "id": "4b3dbff4-41c2-4fe6-965b-92e192cee6e6",
          "type": "artist"
        },
        {
          "id": "6813bf4f-6c4a-4580-b7ba-28283700df89",
          "type": "cover_art",
          "attributes": {
            "description": "Volume Cover From BookWalker",
            "volume": "1",
            "fileName": "154166fa-8c4f-4bbf-8790-357c841f13cf.jpg",
            "locale": "ja",
            "createdAt": "2023-09-15T22:40:41+00:00",
            "updatedAt": "2023-09-15T22:40:41+00:00",
            "version": 1
          }
        },
        {
          "id": "4550150d-31ea-444e-a822-dbdd14702c7a",
          "type": "creator"
        }
      ]
    }
  ],
  "limit": 10,
  "offset": 0,
  "total": 324
}

const mangaInfo = {
  "id": "65361a37-9f9a-4f95-92fa-d6810f0fab17",
  "type": "manga",
  "attributes": {
    "title": {
      "en": "My Best Friend Who I Love Fell Completely in Love With My Vtuber Self"
    },
    "altTitles": [
      {
        "ja": "大好きな親友がVチューバーの自分にガチ恋してた話"
      },
      {
        "ja-ro": "Daisuki na Shinyuu ga Vtuber no Jibun ni Gachikoi shimashita Hanashi"
      },
      {
        "en": "My Best Friend Is In Love With My Vtuber"
      }
    ],
    "description": {
      "en": "Manga artist Oshiga Sukoya is in love with the Vtuber Doujima Taiga and constantly gushes about her to her best friend Hariyama Teruko. Little does Sukoya know that Teruko is a)the person behind Doujima Taiga and b) secretly in love with Sukoya."
    },
    "isLocked": false,
    "links": {
      "al": "140060",
      "kt": "daisuki-na-shinyuu-ga-vtuber-no-jibun-ni-gachi-koishiteta-hanashi",
      "mu": "189279",
      "raw": "https://www.pixiv.net/user/4577/series/125356"
    },
    "originalLanguage": "ja",
    "lastVolume": "",
    "lastChapter": "",
    "publicationDemographic": null,
    "status": "ongoing",
    "year": 2021,
    "contentRating": "safe",
    "tags": [
      {
        "id": "423e2eae-a7a2-4a8b-ac03-a8351462d71d",
        "type": "tag",
        "attributes": {
          "name": {
            "en": "Romance"
          },
          "description": {},
          "group": "genre",
          "version": 1
        },
        "relationships": []
      },
      {
        "id": "4d32cc48-9f00-4cca-9b5a-a839f0764984",
        "type": "tag",
        "attributes": {
          "name": {
            "en": "Comedy"
          },
          "description": {},
          "group": "genre",
          "version": 1
        },
        "relationships": []
      },
      {
        "id": "a3c67850-4684-404e-9b7f-c69850ee5da6",
        "type": "tag",
        "attributes": {
          "name": {
            "en": "Girls' Love"
          },
          "description": {},
          "group": "genre",
          "version": 1
        },
        "relationships": []
      },
      {
        "id": "b13b2a48-c720-44a9-9c77-39c9979373fb",
        "type": "tag",
        "attributes": {
          "name": {
            "en": "Doujinshi"
          },
          "description": {},
          "group": "format",
          "version": 1
        },
        "relationships": []
      },
      {
        "id": "e197df38-d0e7-43b5-9b09-2842d0c326dd",
        "type": "tag",
        "attributes": {
          "name": {
            "en": "Web Comic"
          },
          "description": {},
          "group": "format",
          "version": 1
        },
        "relationships": []
      }
    ],
    "state": "published",
    "chapterNumbersResetOnNewVolume": false,
    "createdAt": "2021-10-10T21:25:55+00:00",
    "updatedAt": "2023-09-27T13:37:25+00:00",
    "version": 33,
    "availableTranslatedLanguages": [
      "pt-br",
      "en",
      "id"
    ],
    "latestUploadedChapter": "597854f2-53e1-4cc8-a276-ed4c8558e344"
  },
  "relationships": [
    {
      "id": "adccdcbf-281c-4f80-a9fc-4a0f124e60f4",
      "type": "author"
    },
    {
      "id": "adccdcbf-281c-4f80-a9fc-4a0f124e60f4",
      "type": "artist"
    },
    {
      "id": "00e3eda0-468d-4eea-a2c0-d93f1d6088ea",
      "type": "cover_art",
      "attributes": {
        "description": "",
        "volume": "1",
        "fileName": "61532b49-5a7b-40e9-b63c-cdb7ff27f9d2.png",
        "locale": "ja",
        "createdAt": "2023-08-11T10:16:13+00:00",
        "updatedAt": "2023-08-11T10:16:13+00:00",
        "version": 1
      }
    },
    {
      "id": "50cc9825-359d-4132-9e68-e5e875d38d94",
      "type": "creator"
    }
  ]
}
const mangaLastChapter = {
  "id": "597854f2-53e1-4cc8-a276-ed4c8558e344",
  "type": "chapter",
  "attributes": {
    "volume": null,
    "chapter": "31.5",
    "title": null,
    "translatedLanguage": "en",
    "externalUrl": null,
    "publishAt": "2023-09-27T05:49:17+00:00",
    "readableAt": "2023-09-27T05:49:17+00:00",
    "createdAt": "2023-09-27T05:49:16+00:00",
    "updatedAt": "2023-09-27T05:49:18+00:00",
    "pages": 1,
    "version": 3
  },
  "relationships": [
    {
      "id": "12af330f-a9e0-48fb-bd19-894f0db44699",
      "type": "scanlation_group",
      "attributes": {
        "name": "/u/ Scanlations",
        "altNames": [],
        "locked": false,
        "website": "https://boards.4chan.org/u/",
        "ircServer": null,
        "ircChannel": null,
        "discord": null,
        "contactEmail": null,
        "description": "Archive of old blogspot: <https://web.archive.org/web/20190117120739/http://snowfag.blogspot.com/>",
        "twitter": null,
        "mangaUpdates": null,
        "focusedLanguages": [
          "en"
        ],
        "official": false,
        "verified": false,
        "inactive": false,
        "publishDelay": null,
        "createdAt": "2021-04-19T21:45:59+00:00",
        "updatedAt": "2021-04-19T21:45:59+00:00",
        "version": 1
      }
    },
    {
      "id": "65361a37-9f9a-4f95-92fa-d6810f0fab17",
      "type": "manga"
    },
    {
      "id": "68d62155-85fa-4851-94af-37402bf16252",
      "type": "user"
    }
  ]
}

export default function Home() {
  return (
    <main className="">
      <PopularSlider >
        {
          mostPopular.data.map((mangaInfo: any, i: number) => {
            return (
              <SliderItem mangaInfo={mangaInfo} className="keen-slider__slide" key={`popular-slider-${i}`} />
            )
          })
        }
      </PopularSlider >
      <MangaCard mangaInfo={mangaInfo} mangaLastChapter={mangaLastChapter} />
      <MangaWideCard mangaInfo={mangaInfo} />
    </main>
  )
}