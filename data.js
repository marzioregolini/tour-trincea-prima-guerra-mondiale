var APP_DATA = {
  "scenes": [
    {
      "id": "0-vai-alla-trincea",
      "name": "Vai alla trincea",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "yaw": 1.5855909795831735,
        "pitch": -0.17887767660884535,
        "fov": 1.3477036756231675
      },
      "linkHotspots": [
        {
          "yaw": 1.0218266525284196,
          "pitch": -0.5217844082901735,
          "rotation": 7.853981633974483,
          "target": "1-vai-al-villaggio"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1100514438767206,
          "pitch": 0.8539337754602876,
          "title": "Condizioni psicologiche",
          "text": "Paura, panico, visioni traumatiche<div>Rabbia contro i politici&nbsp;</div><div>Buio della guerra, bramosia di uccidere</div><div>Trauma</div>"
        },
        {
          "yaw": 2.4675039041589404,
          "pitch": 0.6282324362168197,
          "title": "Cameratismo",
          "text": "Legami di amicizia<div>Forza di volontà</div>"
        },
        {
          "yaw": -1.8638483457815056,
          "pitch": 0.3896079891222577,
          "title": "Lettere dal fronte",
          "text": "Tristezza, nostalgia, malinconia"
        },
        {
          "yaw": -0.009267499768867538,
          "pitch": -0.43850229332950796,
          "title": "La leggenda del Piave",
          "text": "Text"
        },
        {
          "yaw": -0.18134730944517585,
          "pitch": 0.5470946346642673,
          "title": "Soldati deceduti",
          "text": "Morti<div>Motivi: malattie, battaglia, fucilazioni, asfissia da gas<br><div>es. Battaglia di Verdun</div></div>"
        },
        {
          "yaw": -2.8595167084463426,
          "pitch": 0.6168998134374508,
          "title": "Ospedale da campo",
          "text": "Cura dei feriti<div>Mutilazioni, amputazioni</div><div>Dolori</div><div>Malattie</div>"
        },
        {
          "yaw": 2.3172299806786576,
          "pitch": 0.22947193364135643,
          "title": "Feriti",
          "text": "Mutilati, dolore, malattie, piede da trincea, fame, caldo e freddo"
        }
      ]
    },
    {
      "id": "1-vai-al-villaggio",
      "name": "Vai al villaggio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2426827603355033,
          "pitch": -0.40235908584231694,
          "rotation": 7.853981633974483,
          "target": "0-vai-alla-trincea"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Trincea della Grande Guerra",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
