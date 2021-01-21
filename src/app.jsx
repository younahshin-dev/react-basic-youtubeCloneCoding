
import React, { Component } from 'react';
import List from './components/list/list';
import Header from './components/header/header';
import { properties } from './properties.js';
class App extends Component {

  state = {
      isFetching: false,
      //listItem: []
      listItem: [
        {
          "kind": "youtube#searchResult",
          "etag": "RWV_JN15e0b40UdA7crabgFXF6U",
          "id": {
            "kind": "youtube#channel",
            "channelId": "UCU5LQtKXL7v2a2ohly83vGw"
          },
          "snippet": {
            "publishedAt": "2016-02-11T05:48:59Z",
            "channelId": "UCU5LQtKXL7v2a2ohly83vGw",
            "title": "골드손Goldson",
            "description": "안녕하세요 골드손입니다 그림과 관련된 다양한 영상을 만들고 있어요 수채화, 오일파스텔, 과슈, 마카펜, 실크스크린, 스탬프 만들기 등등 다양한 활동을 하고 ...",
            "thumbnails": {
              "default": {
                "url": "https://yt3.ggpht.com/ytc/AAUvwnhX8VN0AevzIT3nly0p8NdSVdyCxit5Y7YYDMfo9iU=s88-c-k-c0xffffffff-no-rj-mo"
              },
              "medium": {
                "url": "https://yt3.ggpht.com/ytc/AAUvwnhX8VN0AevzIT3nly0p8NdSVdyCxit5Y7YYDMfo9iU=s240-c-k-c0xffffffff-no-rj-mo"
              },
              "high": {
                "url": "https://yt3.ggpht.com/ytc/AAUvwnhX8VN0AevzIT3nly0p8NdSVdyCxit5Y7YYDMfo9iU=s800-c-k-c0xffffffff-no-rj-mo"
              }
            },
            "channelTitle": "골드손Goldson",
            "liveBroadcastContent": "upcoming",
            "publishTime": "2016-02-11T05:48:59Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "VWPvbkTZghXQTLoCtw-7UYyVrsI",
          "id": {
            "kind": "youtube#video",
            "videoId": "pMkGXokZ_-M"
          },
          "snippet": {
            "publishedAt": "2021-01-14T13:00:32Z",
            "channelId": "UCU5LQtKXL7v2a2ohly83vGw",
            "title": "3세 이상 사용 가능합니다",
            "description": "골드손 #오일파스텔 #지점토 오늘은 지점토로 오일파스텔 트레이를 만들어 보았습니다. *INSTAGRAM https://instagram.com/goldson183 *Goldson's EMAIL ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/pMkGXokZ_-M/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/pMkGXokZ_-M/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/pMkGXokZ_-M/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "골드손Goldson",
            "liveBroadcastContent": "none",
            "publishTime": "2021-01-14T13:00:32Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "stQNJuv4wWCT0JYiAj_WiO1LApU",
          "id": {
            "kind": "youtube#video",
            "videoId": "X8PTNjru6Ic"
          },
          "snippet": {
            "publishedAt": "2020-07-26T13:00:08Z",
            "channelId": "UCU5LQtKXL7v2a2ohly83vGw",
            "title": "오일파스텔로 살구색 하늘 그리기/Oil pastel drawing apricot sky",
            "description": "INSTAGRAM https://instagram.com/goldson183 *Goldson's EMAIL sonjin1746@naver.com [Music information] Epidemic Part of the Game - Velveteen 제 영상을 ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/X8PTNjru6Ic/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/X8PTNjru6Ic/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/X8PTNjru6Ic/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "골드손Goldson",
            "liveBroadcastContent": "none",
            "publishTime": "2020-07-26T13:00:08Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "BQfLaWEsn8FuasESesRMjBKyRwo",
          "id": {
            "kind": "youtube#video",
            "videoId": "GbI6DI3qTCk"
          },
          "snippet": {
            "publishedAt": "2020-12-31T13:00:04Z",
            "channelId": "UCU5LQtKXL7v2a2ohly83vGw",
            "title": "골드손과 신비한 재료사전",
            "description": "골드손 #오일파스텔 #신재사 오늘은 좀 특이한 재료들을 살펴보았습니다. *INSTAGRAM https://instagram.com/goldson183 *Goldson's EMAIL ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/GbI6DI3qTCk/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/GbI6DI3qTCk/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/GbI6DI3qTCk/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "골드손Goldson",
            "liveBroadcastContent": "none",
            "publishTime": "2020-12-31T13:00:04Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "7w_FiT69Gqfxs24WYS7q1bhOrRU",
          "id": {
            "kind": "youtube#video",
            "videoId": "Pyj-Bj6oKS4"
          },
          "snippet": {
            "publishedAt": "2020-12-13T13:00:07Z",
            "channelId": "UCU5LQtKXL7v2a2ohly83vGw",
            "title": "꽤 쓸만한 가성비 물감을 들고 와 보았습니다/Jelly Gouache Review",
            "description": "오늘은 젤리형태(?)의 좀 특이한 과슈 물감 리뷰를 해보았습니다. ※ 먹지는 말아주세요 ※ *INSTAGRAM https://instagram.com/goldson183 *Goldson's EMAIL ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/Pyj-Bj6oKS4/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/Pyj-Bj6oKS4/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/Pyj-Bj6oKS4/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "골드손Goldson",
            "liveBroadcastContent": "none",
            "publishTime": "2020-12-13T13:00:07Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "RBn5JjsJs-QVk6eRzg3KwlQdbyY",
          "id": {
            "kind": "youtube#video",
            "videoId": "7FB44PKknVI"
          },
          "snippet": {
            "publishedAt": "2020-06-21T13:00:02Z",
            "channelId": "UCU5LQtKXL7v2a2ohly83vGw",
            "title": "오일파스텔로 시원한 수영장 그리기 / Drawing a Cool Swimming Pool with Oil Pastel",
            "description": "오일파스텔로 시원한 수영장 그리기 / Drawing a Cool Swimming Pool with Oil Pastel *INSTAGRAM https://instagram.com/goldson183 *Goldson's EMAIL ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/7FB44PKknVI/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/7FB44PKknVI/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/7FB44PKknVI/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "골드손Goldson",
            "liveBroadcastContent": "none",
            "publishTime": "2020-06-21T13:00:02Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "MWTDjAKdAEbRkk_7XWyUMk4gXKM",
          "id": {
            "kind": "youtube#video",
            "videoId": "NJcpjgvAuWc"
          },
          "snippet": {
            "publishedAt": "2020-08-16T13:00:05Z",
            "channelId": "UCU5LQtKXL7v2a2ohly83vGw",
            "title": "스티커를 만들어 보았습니다/How I Make Stickers",
            "description": "INSTAGRAM https://instagram.com/goldson183 *Goldson's EMAIL sonjin1746@naver.com [Music information] Let't Be Honest(lnstrumental Version)-L.M. Styles ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/NJcpjgvAuWc/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/NJcpjgvAuWc/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/NJcpjgvAuWc/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "골드손Goldson",
            "liveBroadcastContent": "none",
            "publishTime": "2020-08-16T13:00:05Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "fe4XJyJkxTth47DINgddAUhvLOs",
          "id": {
            "kind": "youtube#video",
            "videoId": "UWYSihX79_4"
          },
          "snippet": {
            "publishedAt": "2020-03-08T12:28:47Z",
            "channelId": "UCU5LQtKXL7v2a2ohly83vGw",
            "title": "오일파스텔로 비오는날 풍경 그리기, Drawing a Rainy Landscape with an Oil Pastel",
            "description": "안녕하세요! 오늘은 오일파스텔로 비오는 날을 그려봤어요 어려운거 같지만 막상 과정은 복잡하지 않아요! 블로그 https://blog.naver.com/sonjin1746 인스타 ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/UWYSihX79_4/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/UWYSihX79_4/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/UWYSihX79_4/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "골드손Goldson",
            "liveBroadcastContent": "none",
            "publishTime": "2020-03-08T12:28:47Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "wXH64eOPSWMuK_nUhLfatcP4sso",
          "id": {
            "kind": "youtube#video",
            "videoId": "kg7g44BAo-U"
          },
          "snippet": {
            "publishedAt": "2020-09-12T13:00:18Z",
            "channelId": "UCU5LQtKXL7v2a2ohly83vGw",
            "title": "오일파스텔로 하늘 그리기 3종 세트/3 kinds of sky drawing with oil pastel",
            "description": "INSTAGRAM https://instagram.com/goldson183 *Goldson's EMAIL sonjin1746@naver.com 제 영상을 다른 곳에 절대 업로드 하지 마세요 Don't upload the video ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/kg7g44BAo-U/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/kg7g44BAo-U/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/kg7g44BAo-U/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "골드손Goldson",
            "liveBroadcastContent": "none",
            "publishTime": "2020-09-12T13:00:18Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "6OPRmoGWrjYZPhEJylyH6gyzKOM",
          "id": {
            "kind": "youtube#video",
            "videoId": "UbAVmjBZLHU"
          },
          "snippet": {
            "publishedAt": "2020-04-03T13:00:17Z",
            "channelId": "UCU5LQtKXL7v2a2ohly83vGw",
            "title": "오일파스텔로 간단한 그림과 Q&amp;A, Easy drawing with oil pastels and Q&amp;A",
            "description": "It is very difficult to translate this into Papago. I am really sorry that there are no English subtitles in this video. It is because I am not good at English. If I have a ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/UbAVmjBZLHU/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/UbAVmjBZLHU/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/UbAVmjBZLHU/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "골드손Goldson",
            "liveBroadcastContent": "none",
            "publishTime": "2020-04-03T13:00:17Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "BKi_7Pg4bscKTe_nbU34sYgxeV4",
          "id": {
            "kind": "youtube#video",
            "videoId": "i5vNungoLWY"
          },
          "snippet": {
            "publishedAt": "2020-10-09T13:00:17Z",
            "channelId": "UCU5LQtKXL7v2a2ohly83vGw",
            "title": "갤럭시 커스텀 스킨을 만들어 보았습니다/Making a Galaxy custom skin",
            "description": "본 영상은 삼성전자로부터 소정의 대가를 받아 제작되었습니다 #갤럭시커스텀스킨#마이커스텀스킨 오늘은 삼성전자의 특별한 서비스인 갤럭시 마이 커스텀 스킨을 ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/i5vNungoLWY/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/i5vNungoLWY/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/i5vNungoLWY/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "골드손Goldson",
            "liveBroadcastContent": "none",
            "publishTime": "2020-10-09T13:00:17Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "yDUR454a7MYuLGyD2z-b47pRZBM",
          "id": {
            "kind": "youtube#video",
            "videoId": "BlJq4yuVhGU"
          },
          "snippet": {
            "publishedAt": "2020-08-27T13:00:04Z",
            "channelId": "UCU5LQtKXL7v2a2ohly83vGw",
            "title": "오일파스텔을 만들어 보았습니다/Making Oil Pastel",
            "description": "INSTAGRAM https://instagram.com/goldson183 *Goldson's EMAIL sonjin1746@naver.com 제 영상을 다른 곳에 절대 업로드 하지 마세요 Don't upload the video ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/BlJq4yuVhGU/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/BlJq4yuVhGU/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/BlJq4yuVhGU/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "골드손Goldson",
            "liveBroadcastContent": "none",
            "publishTime": "2020-08-27T13:00:04Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "fB708x4ptUxztnsqdXuSISb3xt8",
          "id": {
            "kind": "youtube#video",
            "videoId": "uYAAhku_bqU"
          },
          "snippet": {
            "publishedAt": "2020-12-24T13:00:16Z",
            "channelId": "UCU5LQtKXL7v2a2ohly83vGw",
            "title": "크리스마스는 역시 집에서 유튜브와 함께?! / Drawing a snowy cityscape",
            "description": "MerryChristmas #과슈드로잉 *INSTAGRAM https://instagram.com/goldson183 *Goldson's EMAIL sonjin1746@naver.com 제 영상을 다른 곳에 절대 업로드 하지 ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/uYAAhku_bqU/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/uYAAhku_bqU/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/uYAAhku_bqU/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "골드손Goldson",
            "liveBroadcastContent": "none",
            "publishTime": "2020-12-24T13:00:16Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "UZhXA8kyTGeMSScjTXAoDUA31PM",
          "id": {
            "kind": "youtube#video",
            "videoId": "aqeWM-Qf_Ts"
          },
          "snippet": {
            "publishedAt": "2020-11-29T13:00:04Z",
            "channelId": "UCU5LQtKXL7v2a2ohly83vGw",
            "title": "오일파스텔 만들기 3탄/Making Oil Pastel Part 3",
            "description": "신나는 오일파스텔 만들기 3탄 오늘은 대리석 에디션입니다. *INSTAGRAM https://instagram.com/goldson183 *Goldson's EMAIL sonjin1746@naver.com [Video ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/aqeWM-Qf_Ts/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/aqeWM-Qf_Ts/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/aqeWM-Qf_Ts/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "골드손Goldson",
            "liveBroadcastContent": "none",
            "publishTime": "2020-11-29T13:00:04Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "wPdl6QPKs2Y0OnVk41ffR6NVjH0",
          "id": {
            "kind": "youtube#video",
            "videoId": "DeN4cmVWiKU"
          },
          "snippet": {
            "publishedAt": "2020-08-20T13:00:04Z",
            "channelId": "UCU5LQtKXL7v2a2ohly83vGw",
            "title": "과슈 물감으로 바다 그리기/Gouache painting",
            "description": "사용재료 물감-까렌다쉬 스튜디오 과슈 종이- 윈저엔 뉴튼 도자기 팔렛트 종이테이프-다이소 흰색물감-인베니오 과슈 화이트 붓-홀베인, 루벤스, 실버 블랙벨벳 ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/DeN4cmVWiKU/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/DeN4cmVWiKU/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/DeN4cmVWiKU/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "골드손Goldson",
            "liveBroadcastContent": "none",
            "publishTime": "2020-08-20T13:00:04Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "yagXQKMrK1p-xLIT-X1-GXxYcBI",
          "id": {
            "kind": "youtube#video",
            "videoId": "PObkbL8F9-c"
          },
          "snippet": {
            "publishedAt": "2020-03-18T13:16:21Z",
            "channelId": "UCU5LQtKXL7v2a2ohly83vGw",
            "title": "오일파스텔로 반짝이는 바다 그리기, Draw a sparkling sea with oil pastels",
            "description": "안녕하세요! 골드손 입니다 오늘은 시원한 바다를 그려봤어요 ^^ 우울할 땐 밝은 그림을 그리면 기분이 조금 좋아지는것 같아요 음악 정보: 영상 왼쪽 상단에 기재 ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/PObkbL8F9-c/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/PObkbL8F9-c/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/PObkbL8F9-c/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "골드손Goldson",
            "liveBroadcastContent": "none",
            "publishTime": "2020-03-18T13:16:21Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "Mp0XzVm6i8fiLTfEAGa6tk156X4",
          "id": {
            "kind": "youtube#video",
            "videoId": "XkkJiCFrcog"
          },
          "snippet": {
            "publishedAt": "2020-07-19T13:00:23Z",
            "channelId": "UCU5LQtKXL7v2a2ohly83vGw",
            "title": "마카펜으로 한복입은 여인 그리기/Drawing a woman dressed in traditional Korean clothes with a marker",
            "description": "이 영상은 화방넷에서 적립금을 지원받아 제작하였습니다. #알파마카#몬타나마카#화방넷페인터즈 *INSTAGRAM https://instagram.com/goldson183 *Goldson's ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/XkkJiCFrcog/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/XkkJiCFrcog/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/XkkJiCFrcog/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "골드손Goldson",
            "liveBroadcastContent": "none",
            "publishTime": "2020-07-19T13:00:23Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "6KoxLxVy1_iP1CCPGYZM2q7Nl_I",
          "id": {
            "kind": "youtube#video",
            "videoId": "lZZjMVlBKGE"
          },
          "snippet": {
            "publishedAt": "2019-11-10T14:49:05Z",
            "channelId": "UCU5LQtKXL7v2a2ohly83vGw",
            "title": "oil pastel drawing,오일파스텔, 문교소프트오일파스텔,오일파스텔 기초",
            "description": "오일파스텔로 밤풍경 간단하게 그리기.",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/lZZjMVlBKGE/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/lZZjMVlBKGE/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/lZZjMVlBKGE/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "골드손Goldson",
            "liveBroadcastContent": "none",
            "publishTime": "2019-11-10T14:49:05Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "OZ7J_WuJxX-S4i5Z_WaNlJJkqvs",
          "id": {
            "kind": "youtube#video",
            "videoId": "Kn6Bmqdi2ZM"
          },
          "snippet": {
            "publishedAt": "2020-12-17T13:00:04Z",
            "channelId": "UCU5LQtKXL7v2a2ohly83vGw",
            "title": "마카 마카 마카롱 먹고싶다/Marker Pen Drawing",
            "description": "INSTAGRAM https://instagram.com/goldson183 *Goldson's EMAIL sonjin1746@naver.com 제 영상을 다른 곳에 절대 업로드 하지 마세요. Don't upload the video ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/Kn6Bmqdi2ZM/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/Kn6Bmqdi2ZM/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/Kn6Bmqdi2ZM/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "골드손Goldson",
            "liveBroadcastContent": "none",
            "publishTime": "2020-12-17T13:00:04Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "StjeXdA2GE2lgNuXyjBPCdLzNhU",
          "id": {
            "kind": "youtube#video",
            "videoId": "5RabryVfqXw"
          },
          "snippet": {
            "publishedAt": "2020-02-06T03:22:20Z",
            "channelId": "UCU5LQtKXL7v2a2ohly83vGw",
            "title": "오일파스텔로 그리는 밤하늘, 초보자도 따라할 수 있는 오일파스텔화, drawing with oil pastel",
            "description": "안녕하세요 골드손입니다 오늘은 정말 쉬운 오일파스텔 그림을 준비했어요! 초보자 분들도 쉽게 해볼 수 있답니다 사용재료 문교 소프트 오일 파스텔 72색 시넬리에 ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/5RabryVfqXw/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/5RabryVfqXw/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/5RabryVfqXw/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "골드손Goldson",
            "liveBroadcastContent": "none",
            "publishTime": "2020-02-06T03:22:20Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "0nOCSH40LxCj6ggHBEnMCJKS-Hk",
          "id": {
            "kind": "youtube#video",
            "videoId": "28y-q8zyK5k"
          },
          "snippet": {
            "publishedAt": "2021-01-07T13:00:01Z",
            "channelId": "UCU5LQtKXL7v2a2ohly83vGw",
            "title": "폭설과 대추위지만 갬성브런치 그리기",
            "description": "골드손 #오일파스텔 #아보카도 #갬성샷 #아닐수있음주의 자막은 조금만 달겠습니다. *INSTAGRAM https://instagram.com/goldson183 *Goldson's EMAIL ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/28y-q8zyK5k/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/28y-q8zyK5k/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/28y-q8zyK5k/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "골드손Goldson",
            "liveBroadcastContent": "none",
            "publishTime": "2021-01-07T13:00:01Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "JwJoDybJwzMfHYqm0GQy9IeL6-o",
          "id": {
            "kind": "youtube#video",
            "videoId": "hLxYz5da4fU"
          },
          "snippet": {
            "publishedAt": "2020-04-25T12:00:30Z",
            "channelId": "UCU5LQtKXL7v2a2ohly83vGw",
            "title": "아크릴 물감으로 구름 그리기, Drawing clouds with acrylic paint",
            "description": "이 영상은 화방넷에서 적립금을 협찬 받고 쉴드에서 물감을 협찬 받아 제작하였습니다 #화방넷페인터즈 #쉴드아크릴물감 #에픽아크릴물감 *INSTAGRAM ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/hLxYz5da4fU/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/hLxYz5da4fU/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/hLxYz5da4fU/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "골드손Goldson",
            "liveBroadcastContent": "none",
            "publishTime": "2020-04-25T12:00:30Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "qkuexSs6aTBZCF7Syt6Ur5bW2WQ",
          "id": {
            "kind": "youtube#video",
            "videoId": "rf7RZ1UCoHA"
          },
          "snippet": {
            "publishedAt": "2020-09-06T13:00:11Z",
            "channelId": "UCU5LQtKXL7v2a2ohly83vGw",
            "title": "오일파스텔은 사서 쓰세요..... 제발/Making a Real Oil Pastel",
            "description": "INSTAGRAM https://instagram.com/goldson183 *Goldson's EMAIL sonjin1746@naver.com 제 영상을 다른 곳에 절대 업로드 하지 마세요 Don't upload the video ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/rf7RZ1UCoHA/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/rf7RZ1UCoHA/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/rf7RZ1UCoHA/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "골드손Goldson",
            "liveBroadcastContent": "none",
            "publishTime": "2020-09-06T13:00:11Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "Mded4FVQtUYJWaR1HrHkWevy6ws",
          "id": {
            "kind": "youtube#video",
            "videoId": "kEXXsDLpzaY"
          },
          "snippet": {
            "publishedAt": "2020-11-15T13:00:09Z",
            "channelId": "UCU5LQtKXL7v2a2ohly83vGw",
            "title": "마카펜으로 구름 그리기/ Draw clouds with a marker pen",
            "description": "오늘은 마카펜으로 구름이 있는 풍경을 그려보았습니다. Today, I drew a cloudy landscape with a marker. *INSTAGRAM https://instagram.com/goldson183 ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/kEXXsDLpzaY/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/kEXXsDLpzaY/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/kEXXsDLpzaY/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "골드손Goldson",
            "liveBroadcastContent": "none",
            "publishTime": "2020-11-15T13:00:09Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "BdAn_IAXQzliz0Zfb91jG1qm2yI",
          "id": {
            "kind": "youtube#video",
            "videoId": "qs8nWTxFDqE"
          },
          "snippet": {
            "publishedAt": "2020-05-24T13:00:31Z",
            "channelId": "UCU5LQtKXL7v2a2ohly83vGw",
            "title": "오일파스텔로 하늘 그리기 / Oil pastel drawing the sky",
            "description": "오일파스텔로 하늘 그리기/Oil pastel drawing the sky *INSTAGRAM https://instagram.com/goldson183 *Goldson's EMAIL sonjin1746@naver.com 제 영상을 다른 ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/qs8nWTxFDqE/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/qs8nWTxFDqE/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/qs8nWTxFDqE/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "골드손Goldson",
            "liveBroadcastContent": "none",
            "publishTime": "2020-05-24T13:00:31Z"
          }
        }
      ]
  };
  
  handleSearch = (searchText) => {
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&key=${properties.apiKey}`; 
    url += `&q=${searchText}`;
    
    fetch(url, {
      method: "GET",
      redirect: 'follow'
    })
    .then((resp) =>  resp.json()) 
    .then((data) => {
      this.setState({ listItem: data.items });                    
    })
    .catch((error) => {
      console.log(error, "catch the hoop")
    })

  };

  componentDidMount() {
    // const requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow'
    // };
    
    // fetch(`https://www.googleapis.com/youtube/v3/search?key=${properties.apiKey}&part=snippet&maxResults=24&q=이연`, requestOptions)
    //   .then(response => response.json())
    //   .then(result => {
    //     this.setState({...this.state, listItem:result.items});
    //   })
    //   .catch(error => console.log('error', error));
  }

  render() {
    return (
      <React.Fragment>
        <Header onSearch={this.handleSearch}/>
        <List items={this.state.listItem} />
      </React.Fragment>
        
    );

  }
}

export default App;
