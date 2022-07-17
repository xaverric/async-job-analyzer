const fs = require("fs");
const awids = {
    "uu-oidc-maing02": [
        "2c3342b1da0944fc8e425c1e6ba4e50d"
    ],
    "usy-fbcore-guig01": [
        "b46be704ddff45df8b0ac6d91e290e4f",
        "e9e53b7d24274b799519a64a691f7c43",
        "087c422d9fc14389938188757b470764",
        "51e9f6088f1c46d49f7e3cdecde53268",
        "75d99926abff48e0931cb6fe22999244",
        "5e29b30bf5a548e1b606137c06f42eac",
        "2939cc2d0a134773890133d472f27cd0",
        "cde09abbad724545b1d635a9ae637829",
        "7f613306e24146e4ab1ce35c32c349de",
        "6d91d45183bf42879bf94bb5f0603979",
        "7e18faa2b2a04b3481739f52f3ef78b8",
        "53da6f0d694040cbafbba02e63956036",
        "7b91b5915346462bb8cbd2e2ff6c0fcb",
        "7b4845f1d4c246e298678459710cc328",
        "c4796ee84db04981812d2ef0df6006aa",
        "9acce4bbca5b49b0a14bae06ba3ee564",
        "76052601412846e2afab0683baa1c557",
        "650b5e9324c748409af3d997b25917fc",
        "15f7ea40e6924cb290e7ad7ed0625351",
        "dd928562938b42509828b4131a1e3d15"
    ],
    "usy-fbcore-dataflowgwg01": [
        "1fedaa7eb4ab4f54bc931070b78fbf16",
        "9e36d589aa0143718a3632afc1f4d13e",
        "68866a84ef774b13bfaf965c69f38439",
        "1b6eaa3646bd4a8ea207328a9561a605",
        "7144a3fdb6ce4eba95bf50d1a7a8263b",
        "109c5b3d0c1b4bb58a688aba57fdcfbb",
        "7f9156acbf714eb294c7d7e5c2e1b38a",
        "54af9a37739e4d2cb3876cc55b2deeaa",
        "88defe2a918a4b768b1a2b469a06de48",
        "7ac9bde92b344e01b4d9cd5387412e8f",
        "9d616423b2d84386b08369a6f0c83db3",
        "f38848ddea6b41c289306fe61370e4d1",
        "a96cd05a66404058bb085cd211b61d5a",
        "68316eb068b446219993da3a0bf727ba",
        "4807f6932a654780b9723197aba12723",
        "74dc5152ed4b4fe99bc627b6817dc811",
        "a3e1004cc156472f84ccda9da953834e",
        "11115474332b42d2962b0d326f66e2be",
        "a707f7f954eb4768a88b9ee67970d9c7",
        "2f0021749e5f4dbcb092d62d9ea2153b"
    ],
    "usy-fbcore-messageregistryg01": [
        "40597b953cfb4b28b9de81649b8e1e76",
        "7c7937657da44aac84b33f5b07bc08ff",
        "4159ea71a1474824a561bc38eb8f6a6b",
        "89cac7fe9d8940bd9536eb8d569b98b3",
        "380733155f4a4f88bf2a81c430e65fb2",
        "0e39a0f375134ca98c77df926a002c4b",
        "8a925c12a50e4ec3800d4166b93b38b3",
        "8173db9f87074a559b260db50b888a7a",
        "71555009225c46eab09af73e0d456fc3",
        "71930392a4094d1b84e4ffd9407855a0",
        "039f3ae31b0e46499e69a54f226d9c89",
        "df533a086e4345f7af041aea9732a1cb",
        "8550b2c0e3a64f0d96d75f271259dee1",
        "fc4ba605c0d14a51840eefa3e7985364",
        "4869455896e040b79667d4f2af06dcf4",
        "9faa655e3769476897cc059e72d52b49",
        "e0cf44bcbb53402ab53ec9e14b9c3c66",
        "bc5b82af71dd4d10baf0a20d36086c7e",
        "6637a35503bd43d7b54bd9220910a243",
        "af12a3d50b7b4f57b065aa8e5d9253c0"
    ],
    "usy-fbcore-dataflowsg01": [
        "36e1b765b65e4a87b547ff43f320d1b5",
        "fde835fa0232461780ba7c7dfde5fc94",
        "25b483d9f4a04056ba4ded5bf4673c12",
        "0dd3ff07e9d14abda53adb92f8442943",
        "cc1a206036e44da99f622505797bc1ec",
        "e5c3e6b44c2f4a32b9257ddbbce00673",
        "017b61bdf96148a29e0287a058d5834b",
        "5f03611f192341a3b24aadc3228bc690",
        "e7c4895958b0488cb0d7d2eb4f79861d",
        "fb73c90ca3f6407eab050c6123eb6339",
        "ca0d6655f33748918a7f6bdef2850ef8",
        "9e64ad3256c04d75ae5641ee624ca00e",
        "d0129da8d978407497100a98abdc94dc",
        "88ff0be6838e4b41819e5134e3aad83e",
        "7fad8d6e23144d0786a720b2376dcbd8",
        "44581f33d2694205831e4bc9ae7fda57",
        "a4f29cc12b354760b6475eb33b31ae4d",
        "129fd2e0034941bdbe8798aca51b940e",
        "a521d3b82e8e47f99d9b8bb6d1701e90",
        "f86fac75b141466cae3572dacee15d25"
    ],
    "usy-fbcore-processcontrolg01": [
        "fb9ed011d5f348e58528fef7a5f63ca4",
        "3638700de85546a4ae54f2d7e23cdb79",
        "a33fe25e4d3441b3b9d14adfdbc269c5",
        "3544923babd841eab6806ffe82db88d3",
        "f1c1e3ddd9094594ac3ae0818ad3b102",
        "842ae2d4d33c48a39f258909caf6d98a",
        "19bea0113a8d40cf960799c2e33488f9",
        "1996ab613e9341b8a0e4a2e8db9de278",
        "991dc08025904b15acd499401acf0da4",
        "08820f57ec9b41f38d7c4bd700149fcd",
        "59a8fd48b6db4370b9995589a66dae05",
        "a3033372aeed4b59a08b27a0dc8b7abe",
        "0b27d6fb539d4420984a13daf0eeead3",
        "fb9de77783ec4aeeb7184d703a0ed451",
        "b04b07983dc545a28823305f047d1af5",
        "ca51fd714a824ae7bd4c59ac87798a44",
        "cdbd8f1839b347adaf58e246b9aaaf09",
        "ad0addd17f5241a0880c9ce28119eeea",
        "f57a2d1a78e8468fb89c31ebecdfa0ec",
        "cc17da63f71f4d3894e1c35ad36c18a3"
    ],
    "usy-fbcore-gridmodelmergingg01": [
        "883f77e36a08497aa5b76629dc0a3dbd",
        "0a271c408308408e804836515a93fd2d",
        "d986fdb7c92d4745a4267cdc1a191d6e",
        "5a2496f40bcc41daa0ce3b26f30d2095",
        "884a942a1476415dafe2d23c542d602e",
        "0e2dd4344d7b4a8399fdda589486aa70",
        "94a50bacfd3a43478be20c1bf4cf31cc",
        "f6f8d322c51c4f46ab36896daa413a14",
        "4888785eb0b24e789a614096a1f725c7",
        "28e5aaea630e4789ab1177d3e41eb677",
        "bcbc8a83c2c1462b8be088ec552021dc",
        "317090d3a1554c29bae5e756b00f7098",
        "ee8bd36352e84b9e994e682e0d33dd8f",
        "c74e2079f0bc4b25ad8123985ec4c1d7",
        "eba2269dce054b42a1c94eff504b9304",
        "9c1bee8dbb264926aca766ca7dc1c1eb",
        "1f68d4634c094eb7b303ae19f426f921",
        "4020856528894b9896d58a725cfa5214",
        "88179d6dbce3489c996dd2094f5937c1",
        "12316717822c438eaa39d458233a51fd"
    ],
    "usy-fbcore-raog01": [
        "b77cdf6286e94bc28d72f940cf103e2b",
        "dccc79fda6e04714acaabad320a095ca",
        "264348830e954370bbac5e7e2f340a25",
        "ae43640a9cf64b9ea852e1a93c960105",
        "6bf9b32e951544d28f975b591d157b45",
        "98dc68f0ad5e4467aeef1e5a69618202",
        "32e36683f76a4a3ea3f48584cee59c7f",
        "cc39f557e97748ab97fd58b2ab342607",
        "6d8f565d6d444c16a05e8302ca280660",
        "47b41949929b4f1d8bc6fcdfdf4ff174",
        "c148334f88164f38b47fd837f874089e",
        "eca063c8c43c47239e1479c1274ec6dc",
        "c62198ac347945bbbc559a9cc352a96f",
        "91a70c7e5236462388579ab23c904440",
        "27b478ab52c44c8ca95733bffe0e1d05",
        "634bfb676fa745dc8bbbba90404af385",
        "04f51d625c0743a7bd06a98aa40283ce",
        "ac0a42effa034f6c83541724650bbfcb",
        "f13e7491356b431aa69cbeb47fb7d4a9",
        "aba33930cd6649b29e06bd93924577e5"
    ],
    "usy-fbcore-archiveg01": [
        "f5465c038a0a4231ba6df31739249ef6",
        "edcabe22dac445939a404b2b78b2686a",
        "8d52f42f16cf49ff9f02bfb44a7f0265",
        "160c6dd438bd430d888110563eaddf42",
        "56b65c8abbbe4ffab7360ad5ef142eaa",
        "452c49e2ae234c3eabb37fa7c4cd8304",
        "7444e892eaa04eea8de265c6c0cf19ce",
        "0bc148c03b1f47f9b6fd81b9a92a6bb3",
        "7f989d59421b4ee5b769cb14d38c454b",
        "4172122beedf4482825527719a0a82a1",
        "5c2c3ab4779640f5b97ab94f3bf718cd",
        "8588a022cda64b55acd2dd92d53ea918",
        "bcc3b7222a0340d8a83ad343eb271f3d",
        "c9724ec3cdbd4554a6a7d3aa252ac0bd",
        "a546cf21fe394d9a9ae9a582d24077d7",
        "c8dfc382cd414ac5bd788e7d1982e247",
        "777bb131eaa8429abd69f313bfc9aa0e",
        "480aa9ef989941fa958c1b58a782cd3e",
        "2ba95cb854514c948cb0912b7d99b443",
        "3b8d94791eeb41b287932af3d0947bba"
    ],
    "usy-fbcore-fbcomputationsg01": [
        "8d7e40387d604890bd989f58786b6675"
    ],
    "usy-fbcore-configurationg01": [
        "b2553e681f12468fa87b535446b7a5d7"
    ],
    "usy-fbcore-converterg01": [
        "e2664bb8d7e04958aa402b23e6fc0270"
    ],
    "uu-asyncjobg01-main": [
        "c1c2ca6fa2c645f7a472d4ffc81f5c94",
        "37cff33dbebb449b86558c3d94754d73"
    ],
    "uu-businessterritory-maing01": [
        "61c6ec6c0a584169a0d0242e6bf2d1b8"
    ],
    "uu-script-engineg02": [
        "c5a3a0d9a9f0438eb69fa55065953e4f"
    ],
    "uu-consoleg01-main": [
        "c5a3a0d9a9f0438eb69fa55065953e4f"
    ],
    "usy-genericgui-maing01": [
        "1c0cccc2f94617549e6d0b334adae8d2"
    ],
    "uu-applogstore-maing01": [
        "e272c04cabb9e73c866ed5149bddf2f8"
    ]
};

const UucloudAmprion3MplsBasicSatWithIdccAsids = {
    "uu-oidc-maing02": "331e4dad442b4d3fbfa4d50d973270d7",
    "usy-fbcore-guig01": "52d875ecb7954b54b5392aad49a989fb",
    "usy-fbcore-dataflowgwg01": "020f0111921146f9ad53c7b40b040b69",
    "usy-fbcore-messageregistryg01": "12ec64cc63d543db8fddd484292dede2",
    "usy-fbcore-dataflowsg01": "72003d84ef5b4cd2930741087836d741",
    "usy-fbcore-processcontrolg01": "66f82504b8584ac4afbf4282ba926d66",
    "usy-fbcore-gridmodelmergingg01": "8aed0460a7904d098e1662bca9668f32",
    "usy-fbcore-raog01": "08bbd1c694e14eb09edc453fb31dc24b",
    "usy-fbcore-archiveg01": "8d97e24c47154c2d876ae838df23e2ac",
    "usy-fbcore-fbcomputationsg01": "c2f333455f614100adbc28832bf01fa0",
    "usy-fbcore-configurationg01": "c25204a70d61490a83fe4e2a43cd22af",
    "usy-fbcore-converterg01": "98df7dec231f4dfb823de4eec9fc35fe",
    "uu-asyncjobg01-main": "54dd75e300af4ddf84cb37e7f4778ceb",
    "uu-businessterritory-maing01": "3a4e77c7b0264a0a86aa462327568906",
    "uu-script-engineg02": "3e19972d79ab4345a538bcc40de4fbdd",
    "uu-consoleg01-main": "f27c3307e48047a7b3c9f02ae7e127f5",
    "usy-genericgui-maing01": "93c0c65d55aba52358f5255fa23ecc72",
    "uu-applogstore-maing01": "2e1a3485e5b1e91cf33e7bdba3dc21ae"
};

const Workspaces = [
    "DAILY_PROCESS",
    "AMP_WORKSPACE",
    "TTG_WORKSPACE",
    "TNG_WORKSPACE",
    "50HZ_WORKSPACE",
    "ELIA_WORKSPACE",
    "RTE_WORKSPACE",
    "TTN_WORKSPACE",
    "CEPS_WORKSPACE",
    "ELES_WORKSPACE",
    "HOPS_WORKSPACE",
    "PSE_WORKSPACE",
    "SEPS_WORKSPACE",
    "TEL_WORKSPACE",
    "APG_WORKSPACE",
    "MAVIR_WORKSPACE",
    "CORESO_WORKSPACE",
    "TSCNET_WORKSPACE",
    "UNICORN_WORKSPACE",
    "JAO_WORKSPACE"
];

const workspacesJsonUME3 = {
    "_COMMENT": "Place the init data from excel under subApps.",
    "asyncSpp": "",
    "subApps": {
      "usy-fbcore-guig01": {
        "workspaces": {
          "asid": {
            "appWorkspaces": [
              "asid"
            ],
            "code": "52d875ecb7954b54b5392aad49a989fb",
            "uid": "asidOwner"
          },
          "awid-DAILY_PROCESS": {
            "appWorkspaces": [
              "DAILY_PROCESS"
            ],
            "code": "2ca0ddf56fb14d3d98ac6ebadb2ac764",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "2ca0ddf56fb14d3d98ac6ebadb2ac764",
              "usy-fbcore-dataflowgwg01": "fef9a1de0a4145aa80dc8dfb44f15db0",
              "usy-fbcore-messageregistryg01": "4a573f76fcea479f9d594de8c1077030",
              "usy-fbcore-dataflowsg01": "8e0ffebb60fb4e4780a0a30085516516",
              "usy-fbcore-processcontrolg01": "8a677e71453f4874b9f5e59bf01b3cc2",
              "usy-fbcore-gridmodelmergingg01": "833de08b97a447a681867b0077f4a4d2",
              "usy-fbcore-raog01": "78047ff8a8bc4bf09be12b7161e40542",
              "usy-fbcore-archiveg01": "53e1c5bd98dd467eaa1be30f1db0e30b",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Daily Process",
                "theme": "default",
                "priority": "1",
                "settingsScreens": [
                  "adjustment-values",
                  "bank-holidays",
                  "constraint-thresholds",
                  "fbpcm",
                  "glsk-tolerance",
                  "id-atc-factors",
                  "rao-parameters",
                  "notifications"
                ]
              }
            }
          },
          "awid-AMP_WORKSPACE": {
            "appWorkspaces": [
              "AMP_WORKSPACE"
            ],
            "code": "454f7d2e137440f4a771fd63725117b8",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "454f7d2e137440f4a771fd63725117b8",
              "usy-fbcore-dataflowgwg01": "37d0ebc680484bc88aa86a63a7d0da37",
              "usy-fbcore-messageregistryg01": "001209568f764136aab717a6b6815e5e",
              "usy-fbcore-dataflowsg01": "51ffbd22625c4662ae5dad631ae875e7",
              "usy-fbcore-processcontrolg01": "9bac7812bd844d9ba04ecb60a22a9771",
              "usy-fbcore-gridmodelmergingg01": "a65ab9486e5b4a4d927a73c60e12ebeb",
              "usy-fbcore-raog01": "b9897dc907154578b4f56063abaced4e",
              "usy-fbcore-archiveg01": "f5ce073c1e184e17b1fb76c83faf33d1",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "AMP Workspace",
                "theme": "default",
                "priority": "2",
                "settingsScreens": [
                  "constraint-thresholds",
                  "glsk-tolerance",
                  "rao-parameters"
                ]
              }
            }
          },
          "awid-TTG_WORKSPACE": {
            "appWorkspaces": [
              "TTG_WORKSPACE"
            ],
            "code": "a0f4bdcbcbe9496dbf52ab6122a59f87",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "a0f4bdcbcbe9496dbf52ab6122a59f87",
              "usy-fbcore-dataflowgwg01": "e487be20959f463f8e4c3092c868b90b",
              "usy-fbcore-messageregistryg01": "2a47d97e28a4499c8563ce9bdfb68aeb",
              "usy-fbcore-dataflowsg01": "65439894a6b346c7b6ade80bb5039ec3",
              "usy-fbcore-processcontrolg01": "889f5692644045f5a5e3c527de65258e",
              "usy-fbcore-gridmodelmergingg01": "d42da9665ab7400fa1d050daade497ef",
              "usy-fbcore-raog01": "49e7487ee05348f283a196d2bf6c928c",
              "usy-fbcore-archiveg01": "e2323c34a2fd4eddb71dd2c4fddb592a",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TTG Workspace",
                "theme": "default",
                "priority": "2",
                "settingsScreens": [
                  "constraint-thresholds",
                  "glsk-tolerance",
                  "rao-parameters"
                ]
              }
            }
          },
          "awid-TNG_WORKSPACE": {
            "appWorkspaces": [
              "TNG_WORKSPACE"
            ],
            "code": "3212f51a06424138a0f132ee72f51b04",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "3212f51a06424138a0f132ee72f51b04",
              "usy-fbcore-dataflowgwg01": "e90d136bfec945f985f0f7f9ff0aeed3",
              "usy-fbcore-messageregistryg01": "d30d37fd075e4c90a28aac747e3211f4",
              "usy-fbcore-dataflowsg01": "295b6b628d944c6aa09e6fd0a504a6ff",
              "usy-fbcore-processcontrolg01": "d8306fed32f444a790a03be7cb179701",
              "usy-fbcore-gridmodelmergingg01": "d80de50ca4dd4aca906400c05072f448",
              "usy-fbcore-raog01": "2347985cc2634f269e470ef64227a187",
              "usy-fbcore-archiveg01": "900e93c9cd774e5f99efca6c7cca7168",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TNG Workspace",
                "theme": "default",
                "priority": "2",
                "settingsScreens": [
                  "constraint-thresholds",
                  "glsk-tolerance",
                  "rao-parameters"
                ]
              }
            }
          },
          "awid-50HZ_WORKSPACE": {
            "appWorkspaces": [
              "50HZ_WORKSPACE"
            ],
            "code": "10dff0c3460b4a36b716920a89d8e171",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "10dff0c3460b4a36b716920a89d8e171",
              "usy-fbcore-dataflowgwg01": "81d6033f551d4d0aa9adc4675a1c1a8d",
              "usy-fbcore-messageregistryg01": "dd7644cc8d5a4e4194d37decdf12b030",
              "usy-fbcore-dataflowsg01": "15419f7958a84071ab705b4000d7a189",
              "usy-fbcore-processcontrolg01": "dcf94a60737140dab61dd932471736bc",
              "usy-fbcore-gridmodelmergingg01": "47ec7c95a8314a5c854025184ef00ae9",
              "usy-fbcore-raog01": "1348a406c20a4542afea37e72c3dbd03",
              "usy-fbcore-archiveg01": "788d9f0f0be145a3bb22713c8724f16a",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "50Hz Workspace",
                "theme": "default",
                "priority": "2",
                "settingsScreens": [
                  "constraint-thresholds",
                  "glsk-tolerance",
                  "rao-parameters"
                ]
              }
            }
          },
          "awid-ELIA_WORKSPACE": {
            "appWorkspaces": [
              "ELIA_WORKSPACE"
            ],
            "code": "c741e3a44d824c6a978cb83ea60066b4",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "c741e3a44d824c6a978cb83ea60066b4",
              "usy-fbcore-dataflowgwg01": "9ce5f23b45ba44069b1efd0de2503011",
              "usy-fbcore-messageregistryg01": "cf79830795224548a0ce3e9daf57cb86",
              "usy-fbcore-dataflowsg01": "52bf2b6889f44f658b2f21538f30d9b8",
              "usy-fbcore-processcontrolg01": "b321551e1b8f4ee78eca6b1bc12044e1",
              "usy-fbcore-gridmodelmergingg01": "a687c53c3c1e4df4871df5a7afb7f7f7",
              "usy-fbcore-raog01": "3481e312798e4c27a2ec38f3185115a6",
              "usy-fbcore-archiveg01": "9391057227724d488b765d58de2d00c5",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Elia Workspace",
                "theme": "default",
                "priority": "2",
                "settingsScreens": [
                  "constraint-thresholds",
                  "glsk-tolerance",
                  "rao-parameters"
                ]
              }
            }
          },
          "awid-RTE_WORKSPACE": {
            "appWorkspaces": [
              "RTE_WORKSPACE"
            ],
            "code": "4f032ebb5d7644c4a8482b3cab0c8d95",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "4f032ebb5d7644c4a8482b3cab0c8d95",
              "usy-fbcore-dataflowgwg01": "742a1832e960414daf670d0bb867a99c",
              "usy-fbcore-messageregistryg01": "db70e9acdeaa492ca1256a8983c2f367",
              "usy-fbcore-dataflowsg01": "45a9984723f74e9a8939a859dde4871a",
              "usy-fbcore-processcontrolg01": "c58f4e34f1744656858ee54628df61cb",
              "usy-fbcore-gridmodelmergingg01": "24d977ba941c42088a72ecd33a083c26",
              "usy-fbcore-raog01": "93193a6959bf444e9f5f007a6f05d0a2",
              "usy-fbcore-archiveg01": "0f2146f868ab453185d220a2c2b0d3c9",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "RTE Workspace",
                "theme": "default",
                "priority": "2",
                "settingsScreens": [
                  "constraint-thresholds",
                  "glsk-tolerance",
                  "rao-parameters"
                ]
              }
            }
          },
          "awid-TTN_WORKSPACE": {
            "appWorkspaces": [
              "TTN_WORKSPACE"
            ],
            "code": "8227c48bd46f4e18ba8a90876adf552f",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "8227c48bd46f4e18ba8a90876adf552f",
              "usy-fbcore-dataflowgwg01": "4e926830823f48459610b05eff8c78f2",
              "usy-fbcore-messageregistryg01": "baf8835d6b1843e080760911f2e6e9d5",
              "usy-fbcore-dataflowsg01": "53f21dd0a67944caafe4a8e8da4e534e",
              "usy-fbcore-processcontrolg01": "03d400034f124e63a81877f836643cd2",
              "usy-fbcore-gridmodelmergingg01": "8e52cebdb45a4534a3af37977e216347",
              "usy-fbcore-raog01": "f233b7989eb24a888af721fb6afdbb85",
              "usy-fbcore-archiveg01": "2a607e42aa6248f3b81e3c25cce05c55",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TTN Workspace",
                "theme": "default",
                "priority": "2",
                "settingsScreens": [
                  "constraint-thresholds",
                  "glsk-tolerance",
                  "rao-parameters"
                ]
              }
            }
          },
          "awid-CEPS_WORKSPACE": {
            "appWorkspaces": [
              "CEPS_WORKSPACE"
            ],
            "code": "8be37fcccc5b481e8f41cd7258ef9b61",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "8be37fcccc5b481e8f41cd7258ef9b61",
              "usy-fbcore-dataflowgwg01": "de05153ea1f1416f9834711185298316",
              "usy-fbcore-messageregistryg01": "8b4c05e9591d47d89d1ea8f2a3b339f6",
              "usy-fbcore-dataflowsg01": "94bb7586474f42779c30f3f6d96d1a56",
              "usy-fbcore-processcontrolg01": "b25bc0fda68a4a06b64059d401035879",
              "usy-fbcore-gridmodelmergingg01": "14b54040569544fb8d86efdad72f5cd6",
              "usy-fbcore-raog01": "c03dde09c00e4de99a57824d189a8a30",
              "usy-fbcore-archiveg01": "50b6908c9c77415699ce62ed3cab9597",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "CEPS Workspace",
                "theme": "default",
                "priority": "2",
                "settingsScreens": [
                  "constraint-thresholds",
                  "glsk-tolerance",
                  "rao-parameters"
                ]
              }
            }
          },
          "awid-ELES_WORKSPACE": {
            "appWorkspaces": [
              "ELES_WORKSPACE"
            ],
            "code": "a5904dae664648669822c01609436dc3",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "a5904dae664648669822c01609436dc3",
              "usy-fbcore-dataflowgwg01": "64d07bb7f96b4376b2943c064ded797e",
              "usy-fbcore-messageregistryg01": "9d45f5d693554f09a9fb7f6adc47dfe5",
              "usy-fbcore-dataflowsg01": "f3a2754798434b68a6cf01df61817d4a",
              "usy-fbcore-processcontrolg01": "0bb07dbf21964e02bb49d119a840a8e1",
              "usy-fbcore-gridmodelmergingg01": "5133b9f9594e4cb5935979a8383adeb6",
              "usy-fbcore-raog01": "1714c9614524401b894fe93649514721",
              "usy-fbcore-archiveg01": "c0e250293d4348c5818458db780289c5",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "ELES Workspace",
                "theme": "default",
                "priority": "2",
                "settingsScreens": [
                  "constraint-thresholds",
                  "glsk-tolerance",
                  "rao-parameters"
                ]
              }
            }
          },
          "awid-HOPS_WORKSPACE": {
            "appWorkspaces": [
              "HOPS_WORKSPACE"
            ],
            "code": "f104e210f1384583a0d6b5bea1771b08",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "f104e210f1384583a0d6b5bea1771b08",
              "usy-fbcore-dataflowgwg01": "831dbb8a88744d33824135e8bf4a2a36",
              "usy-fbcore-messageregistryg01": "7a9a037cf1354f908373a8cc3ee50b7d",
              "usy-fbcore-dataflowsg01": "50bf37a2976b4e35bf55b13f2ee40bc0",
              "usy-fbcore-processcontrolg01": "ce57f8e4dd6c4cd18016ff96641ab9a2",
              "usy-fbcore-gridmodelmergingg01": "8feeda1e494d4f3f9b3cccb593547de3",
              "usy-fbcore-raog01": "d0fdf2eb72474873a63fff64e4f44fe9",
              "usy-fbcore-archiveg01": "2a23221aeaf647398159f830c81b4f90",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "HOPS Workspace",
                "theme": "default",
                "priority": "2",
                "settingsScreens": [
                  "constraint-thresholds",
                  "glsk-tolerance",
                  "rao-parameters"
                ]
              }
            }
          },
          "awid-PSE_WORKSPACE": {
            "appWorkspaces": [
              "PSE_WORKSPACE"
            ],
            "code": "5675e47462454388911271cc3e99d8cc",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "5675e47462454388911271cc3e99d8cc",
              "usy-fbcore-dataflowgwg01": "31ab0bb70ac044acbd6de1e1e8a1a221",
              "usy-fbcore-messageregistryg01": "13959238ee654e4a8ab0f9e69507c63e",
              "usy-fbcore-dataflowsg01": "4cb1efc998714a069b80cb94fd6f4b1d",
              "usy-fbcore-processcontrolg01": "5e56678485b348daad9dfbbe4f4c3f6e",
              "usy-fbcore-gridmodelmergingg01": "45b52de311654b4aa92df13cf83502a6",
              "usy-fbcore-raog01": "3352d631f7a443f3af090daa71a60ab6",
              "usy-fbcore-archiveg01": "d3e4a94a0ddd46c88438cd2efc9b6869",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "PSE Workspace",
                "theme": "default",
                "priority": "2",
                "settingsScreens": [
                  "constraint-thresholds",
                  "glsk-tolerance",
                  "rao-parameters"
                ]
              }
            }
          },
          "awid-SEPS_WORKSPACE": {
            "appWorkspaces": [
              "SEPS_WORKSPACE"
            ],
            "code": "466b4fdbea9a413887671f6af12347d0",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "466b4fdbea9a413887671f6af12347d0",
              "usy-fbcore-dataflowgwg01": "db21aa8b76a545a991894a44f84d30e6",
              "usy-fbcore-messageregistryg01": "1e4a954b88fd467dacd4bc2eb7ff86c1",
              "usy-fbcore-dataflowsg01": "1ce63c9d348b4ba593c2f3ee1cac7692",
              "usy-fbcore-processcontrolg01": "2bb9bc62a5724f48bce9cd28a1ca7693",
              "usy-fbcore-gridmodelmergingg01": "d07af08d5ec747769eaaa904d78bf9ab",
              "usy-fbcore-raog01": "5feb82f8ce094652967ef11c834ac8f8",
              "usy-fbcore-archiveg01": "18da508bca2244518ac8f6d08674f667",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "SEPS Workspace",
                "theme": "default",
                "priority": "2",
                "settingsScreens": [
                  "constraint-thresholds",
                  "glsk-tolerance",
                  "rao-parameters"
                ]
              }
            }
          },
          "awid-TEL_WORKSPACE": {
            "appWorkspaces": [
              "TEL_WORKSPACE"
            ],
            "code": "ecad48cf155a46df9d44020b44fb6610",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "ecad48cf155a46df9d44020b44fb6610",
              "usy-fbcore-dataflowgwg01": "d9f30d9b16134e7f9881544ddbd4e3e1",
              "usy-fbcore-messageregistryg01": "eece30e39e1143819b8b19ff09aed079",
              "usy-fbcore-dataflowsg01": "299b166ec6a749fc97dffa7ab0d26dd3",
              "usy-fbcore-processcontrolg01": "9dd9be5caa3d4d38839719738ade3a6f",
              "usy-fbcore-gridmodelmergingg01": "f82c1c74f17641c9a661334ca6b3ee78",
              "usy-fbcore-raog01": "c1b10797ec2c4f1c87ece7629c604b28",
              "usy-fbcore-archiveg01": "c81806e27ffb4253bbd05ff5a9a33e67",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TEL Workspace",
                "theme": "default",
                "priority": "2",
                "settingsScreens": [
                  "constraint-thresholds",
                  "glsk-tolerance",
                  "rao-parameters"
                ]
              }
            }
          },
          "awid-APG_WORKSPACE": {
            "appWorkspaces": [
              "APG_WORKSPACE"
            ],
            "code": "da39fa50a4e9408aa2a5f6e7e10afde8",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "da39fa50a4e9408aa2a5f6e7e10afde8",
              "usy-fbcore-dataflowgwg01": "f3d16fda85a647f295977e5cf8bd287d",
              "usy-fbcore-messageregistryg01": "d1e097a350ce402cb27d4a377e2d53c3",
              "usy-fbcore-dataflowsg01": "b232f2c4d7b94fab83cedf6d08d94f0c",
              "usy-fbcore-processcontrolg01": "a18282de978043f28ae3bc311251d19e",
              "usy-fbcore-gridmodelmergingg01": "32b73f6ca365468c99a835274b89519a",
              "usy-fbcore-raog01": "8925f7e4d5cb40eeb42c318e00af36f5",
              "usy-fbcore-archiveg01": "2dbcc97706f746df913518198e748131",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "APG Workspace",
                "theme": "default",
                "priority": "2",
                "settingsScreens": [
                  "constraint-thresholds",
                  "glsk-tolerance",
                  "rao-parameters"
                ]
              }
            }
          },
          "awid-MAVIR_WORKSPACE": {
            "appWorkspaces": [
              "MAVIR_WORKSPACE"
            ],
            "code": "0c234d8e926841b589900c385f335d0d",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "0c234d8e926841b589900c385f335d0d",
              "usy-fbcore-dataflowgwg01": "c7f0c56ab513465db583c4ff787e2bd5",
              "usy-fbcore-messageregistryg01": "fc5667671d214feba48c54135ab73f51",
              "usy-fbcore-dataflowsg01": "2d1fcd3bafb24abc8ac07b448668e030",
              "usy-fbcore-processcontrolg01": "fe18eb5fc98345ffbc9b3d538566cba9",
              "usy-fbcore-gridmodelmergingg01": "697d9e275c384c349353c05b8e260b5a",
              "usy-fbcore-raog01": "65a1418c03d6429bbdf064b909d45bf6",
              "usy-fbcore-archiveg01": "df32372809494683875fb63d2979df88",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "MAVIR Workspace",
                "theme": "default",
                "priority": "2",
                "settingsScreens": [
                  "constraint-thresholds",
                  "glsk-tolerance",
                  "rao-parameters"
                ]
              }
            }
          },
          "awid-CORESO_WORKSPACE": {
            "appWorkspaces": [
              "CORESO_WORKSPACE"
            ],
            "code": "6ce5041ae38b4edb8d45dce9fe4f4fce",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "6ce5041ae38b4edb8d45dce9fe4f4fce",
              "usy-fbcore-dataflowgwg01": "5a0930f3b88347c1b0a7f3c1feb46259",
              "usy-fbcore-messageregistryg01": "a89bfacc836348ef89dae8717addbb00",
              "usy-fbcore-dataflowsg01": "3901f2d2de8340b296de8697300dd627",
              "usy-fbcore-processcontrolg01": "e7e071870f0a4cb9ae1c9a97395098a3",
              "usy-fbcore-gridmodelmergingg01": "7955070286a14ef594338c97b7fc2fe3",
              "usy-fbcore-raog01": "185d14d0e8e3423baf9dd7a96e78c335",
              "usy-fbcore-archiveg01": "43ec6f2df5f34bb58ac4671dddfa92e6",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "CORESO Workspace",
                "theme": "default",
                "priority": "2",
                "settingsScreens": [
                  "constraint-thresholds",
                  "glsk-tolerance",
                  "rao-parameters"
                ]
              }
            }
          },
          "awid-TSCNET_WORKSPACE": {
            "appWorkspaces": [
              "TSCNET_WORKSPACE"
            ],
            "code": "bad29a94cc8148429262adf5aacc1262",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "bad29a94cc8148429262adf5aacc1262",
              "usy-fbcore-dataflowgwg01": "204dc0b7d9904d85a551a38c0149c997",
              "usy-fbcore-messageregistryg01": "3d7ed4a358914fb9a7085fbb0ffc2dbb",
              "usy-fbcore-dataflowsg01": "a0d9739335534b05a39f99d96cfbdf20",
              "usy-fbcore-processcontrolg01": "15811e0370b048bd82e3213c18993104",
              "usy-fbcore-gridmodelmergingg01": "f83899d4e4dd4343b1115bdbe336bfec",
              "usy-fbcore-raog01": "3acc4e430995465282ed2816aba62677",
              "usy-fbcore-archiveg01": "dcac140905944e54a46a6ecd1e0d2630",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TSCNET Workspace ",
                "theme": "default",
                "priority": "2",
                "settingsScreens": [
                  "constraint-thresholds",
                  "glsk-tolerance",
                  "rao-parameters"
                ]
              }
            }
          },
          "awid-UNICORN_WORKSPACE": {
            "appWorkspaces": [
              "UNICORN_WORKSPACE"
            ],
            "code": "cf57e31db5b84cd99edaec017d89f0c1",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "cf57e31db5b84cd99edaec017d89f0c1",
              "usy-fbcore-dataflowgwg01": "a6209f7ec8fe4961862fec49a4d1bdc1",
              "usy-fbcore-messageregistryg01": "370bc28e2b674d7081ea9c839eb89a82",
              "usy-fbcore-dataflowsg01": "3a7c8987abfd4fcc88fb2ea3982e98e7",
              "usy-fbcore-processcontrolg01": "d4a30869edc642948814dd7733225fc2",
              "usy-fbcore-gridmodelmergingg01": "c132558ee4bf4bddad88aa9b8a5476ac",
              "usy-fbcore-raog01": "76640feac97a41be86feb7c3faba694e",
              "usy-fbcore-archiveg01": "f307b998707d444d8dfcbc691b39b890",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Unicorn Workspace",
                "theme": "default",
                "priority": "2",
                "settingsScreens": [
                  "constraint-thresholds",
                  "glsk-tolerance",
                  "rao-parameters"
                ]
              }
            }
          },
          "awid-JAO_WORKSPACE": {
            "appWorkspaces": [
              "JAO_WORKSPACE"
            ],
            "code": "4f906639d6641c06eb440a2c8af7e25e",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "4f906639d6641c06eb440a2c8af7e25e",
              "usy-fbcore-dataflowgwg01": "1a3ce2ab40dc5dc805264463b3698cdc",
              "usy-fbcore-messageregistryg01": "7297ec08b2c689144d442136d62e1502",
              "usy-fbcore-dataflowsg01": "fcfd4bcc0cd46a8766d0cb55f0accaa8",
              "usy-fbcore-processcontrolg01": "1b1970da528e1b9155271eba4ffd9a36",
              "usy-fbcore-gridmodelmergingg01": "3dac2f4772ac3fe37cb83ce1478657c4",
              "usy-fbcore-raog01": "370118f1a8989305303b8c2b56fb5569",
              "usy-fbcore-archiveg01": "14ddfe80689767143b0492c8dd4bf9c6",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "JAO Workspace",
                "theme": "default",
                "priority": "2",
                "settingsScreens": [
                  "constraint-thresholds",
                  "glsk-tolerance",
                  "rao-parameters"
                ]
              }
            }
          }
        }
      },
      "usy-fbcore-dataflowgwg01": {
        "workspaces": {
          "asid": {
            "appWorkspaces": [
              "asid"
            ],
            "code": "020f0111921146f9ad53c7b40b040b69",
            "uid": "asidOwner"
          },
          "awid-DAILY_PROCESS": {
            "appWorkspaces": [
              "DAILY_PROCESS"
            ],
            "code": "fef9a1de0a4145aa80dc8dfb44f15db0",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "2ca0ddf56fb14d3d98ac6ebadb2ac764",
              "usy-fbcore-dataflowgwg01": "fef9a1de0a4145aa80dc8dfb44f15db0",
              "usy-fbcore-messageregistryg01": "4a573f76fcea479f9d594de8c1077030",
              "usy-fbcore-dataflowsg01": "8e0ffebb60fb4e4780a0a30085516516",
              "usy-fbcore-processcontrolg01": "8a677e71453f4874b9f5e59bf01b3cc2",
              "usy-fbcore-gridmodelmergingg01": "833de08b97a447a681867b0077f4a4d2",
              "usy-fbcore-raog01": "78047ff8a8bc4bf09be12b7161e40542",
              "usy-fbcore-archiveg01": "53e1c5bd98dd467eaa1be30f1db0e30b",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Daily Process",
                "theme": "default",
                "priority": "1"
              }
            }
          },
          "awid-AMP_WORKSPACE": {
            "appWorkspaces": [
              "AMP_WORKSPACE"
            ],
            "code": "37d0ebc680484bc88aa86a63a7d0da37",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "454f7d2e137440f4a771fd63725117b8",
              "usy-fbcore-dataflowgwg01": "37d0ebc680484bc88aa86a63a7d0da37",
              "usy-fbcore-messageregistryg01": "001209568f764136aab717a6b6815e5e",
              "usy-fbcore-dataflowsg01": "51ffbd22625c4662ae5dad631ae875e7",
              "usy-fbcore-processcontrolg01": "9bac7812bd844d9ba04ecb60a22a9771",
              "usy-fbcore-gridmodelmergingg01": "a65ab9486e5b4a4d927a73c60e12ebeb",
              "usy-fbcore-raog01": "b9897dc907154578b4f56063abaced4e",
              "usy-fbcore-archiveg01": "f5ce073c1e184e17b1fb76c83faf33d1",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "AMP Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TTG_WORKSPACE": {
            "appWorkspaces": [
              "TTG_WORKSPACE"
            ],
            "code": "e487be20959f463f8e4c3092c868b90b",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "a0f4bdcbcbe9496dbf52ab6122a59f87",
              "usy-fbcore-dataflowgwg01": "e487be20959f463f8e4c3092c868b90b",
              "usy-fbcore-messageregistryg01": "2a47d97e28a4499c8563ce9bdfb68aeb",
              "usy-fbcore-dataflowsg01": "65439894a6b346c7b6ade80bb5039ec3",
              "usy-fbcore-processcontrolg01": "889f5692644045f5a5e3c527de65258e",
              "usy-fbcore-gridmodelmergingg01": "d42da9665ab7400fa1d050daade497ef",
              "usy-fbcore-raog01": "49e7487ee05348f283a196d2bf6c928c",
              "usy-fbcore-archiveg01": "e2323c34a2fd4eddb71dd2c4fddb592a",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TTG Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TNG_WORKSPACE": {
            "appWorkspaces": [
              "TNG_WORKSPACE"
            ],
            "code": "e90d136bfec945f985f0f7f9ff0aeed3",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "3212f51a06424138a0f132ee72f51b04",
              "usy-fbcore-dataflowgwg01": "e90d136bfec945f985f0f7f9ff0aeed3",
              "usy-fbcore-messageregistryg01": "d30d37fd075e4c90a28aac747e3211f4",
              "usy-fbcore-dataflowsg01": "295b6b628d944c6aa09e6fd0a504a6ff",
              "usy-fbcore-processcontrolg01": "d8306fed32f444a790a03be7cb179701",
              "usy-fbcore-gridmodelmergingg01": "d80de50ca4dd4aca906400c05072f448",
              "usy-fbcore-raog01": "2347985cc2634f269e470ef64227a187",
              "usy-fbcore-archiveg01": "900e93c9cd774e5f99efca6c7cca7168",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TNG Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-50HZ_WORKSPACE": {
            "appWorkspaces": [
              "50HZ_WORKSPACE"
            ],
            "code": "81d6033f551d4d0aa9adc4675a1c1a8d",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "10dff0c3460b4a36b716920a89d8e171",
              "usy-fbcore-dataflowgwg01": "81d6033f551d4d0aa9adc4675a1c1a8d",
              "usy-fbcore-messageregistryg01": "dd7644cc8d5a4e4194d37decdf12b030",
              "usy-fbcore-dataflowsg01": "15419f7958a84071ab705b4000d7a189",
              "usy-fbcore-processcontrolg01": "dcf94a60737140dab61dd932471736bc",
              "usy-fbcore-gridmodelmergingg01": "47ec7c95a8314a5c854025184ef00ae9",
              "usy-fbcore-raog01": "1348a406c20a4542afea37e72c3dbd03",
              "usy-fbcore-archiveg01": "788d9f0f0be145a3bb22713c8724f16a",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "50Hz Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-ELIA_WORKSPACE": {
            "appWorkspaces": [
              "ELIA_WORKSPACE"
            ],
            "code": "9ce5f23b45ba44069b1efd0de2503011",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "c741e3a44d824c6a978cb83ea60066b4",
              "usy-fbcore-dataflowgwg01": "9ce5f23b45ba44069b1efd0de2503011",
              "usy-fbcore-messageregistryg01": "cf79830795224548a0ce3e9daf57cb86",
              "usy-fbcore-dataflowsg01": "52bf2b6889f44f658b2f21538f30d9b8",
              "usy-fbcore-processcontrolg01": "b321551e1b8f4ee78eca6b1bc12044e1",
              "usy-fbcore-gridmodelmergingg01": "a687c53c3c1e4df4871df5a7afb7f7f7",
              "usy-fbcore-raog01": "3481e312798e4c27a2ec38f3185115a6",
              "usy-fbcore-archiveg01": "9391057227724d488b765d58de2d00c5",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Elia Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-RTE_WORKSPACE": {
            "appWorkspaces": [
              "RTE_WORKSPACE"
            ],
            "code": "742a1832e960414daf670d0bb867a99c",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "4f032ebb5d7644c4a8482b3cab0c8d95",
              "usy-fbcore-dataflowgwg01": "742a1832e960414daf670d0bb867a99c",
              "usy-fbcore-messageregistryg01": "db70e9acdeaa492ca1256a8983c2f367",
              "usy-fbcore-dataflowsg01": "45a9984723f74e9a8939a859dde4871a",
              "usy-fbcore-processcontrolg01": "c58f4e34f1744656858ee54628df61cb",
              "usy-fbcore-gridmodelmergingg01": "24d977ba941c42088a72ecd33a083c26",
              "usy-fbcore-raog01": "93193a6959bf444e9f5f007a6f05d0a2",
              "usy-fbcore-archiveg01": "0f2146f868ab453185d220a2c2b0d3c9",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "RTE Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TTN_WORKSPACE": {
            "appWorkspaces": [
              "TTN_WORKSPACE"
            ],
            "code": "4e926830823f48459610b05eff8c78f2",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "8227c48bd46f4e18ba8a90876adf552f",
              "usy-fbcore-dataflowgwg01": "4e926830823f48459610b05eff8c78f2",
              "usy-fbcore-messageregistryg01": "baf8835d6b1843e080760911f2e6e9d5",
              "usy-fbcore-dataflowsg01": "53f21dd0a67944caafe4a8e8da4e534e",
              "usy-fbcore-processcontrolg01": "03d400034f124e63a81877f836643cd2",
              "usy-fbcore-gridmodelmergingg01": "8e52cebdb45a4534a3af37977e216347",
              "usy-fbcore-raog01": "f233b7989eb24a888af721fb6afdbb85",
              "usy-fbcore-archiveg01": "2a607e42aa6248f3b81e3c25cce05c55",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TTN Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-CEPS_WORKSPACE": {
            "appWorkspaces": [
              "CEPS_WORKSPACE"
            ],
            "code": "de05153ea1f1416f9834711185298316",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "8be37fcccc5b481e8f41cd7258ef9b61",
              "usy-fbcore-dataflowgwg01": "de05153ea1f1416f9834711185298316",
              "usy-fbcore-messageregistryg01": "8b4c05e9591d47d89d1ea8f2a3b339f6",
              "usy-fbcore-dataflowsg01": "94bb7586474f42779c30f3f6d96d1a56",
              "usy-fbcore-processcontrolg01": "b25bc0fda68a4a06b64059d401035879",
              "usy-fbcore-gridmodelmergingg01": "14b54040569544fb8d86efdad72f5cd6",
              "usy-fbcore-raog01": "c03dde09c00e4de99a57824d189a8a30",
              "usy-fbcore-archiveg01": "50b6908c9c77415699ce62ed3cab9597",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "CEPS Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-ELES_WORKSPACE": {
            "appWorkspaces": [
              "ELES_WORKSPACE"
            ],
            "code": "64d07bb7f96b4376b2943c064ded797e",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "a5904dae664648669822c01609436dc3",
              "usy-fbcore-dataflowgwg01": "64d07bb7f96b4376b2943c064ded797e",
              "usy-fbcore-messageregistryg01": "9d45f5d693554f09a9fb7f6adc47dfe5",
              "usy-fbcore-dataflowsg01": "f3a2754798434b68a6cf01df61817d4a",
              "usy-fbcore-processcontrolg01": "0bb07dbf21964e02bb49d119a840a8e1",
              "usy-fbcore-gridmodelmergingg01": "5133b9f9594e4cb5935979a8383adeb6",
              "usy-fbcore-raog01": "1714c9614524401b894fe93649514721",
              "usy-fbcore-archiveg01": "c0e250293d4348c5818458db780289c5",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "ELES Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-HOPS_WORKSPACE": {
            "appWorkspaces": [
              "HOPS_WORKSPACE"
            ],
            "code": "831dbb8a88744d33824135e8bf4a2a36",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "f104e210f1384583a0d6b5bea1771b08",
              "usy-fbcore-dataflowgwg01": "831dbb8a88744d33824135e8bf4a2a36",
              "usy-fbcore-messageregistryg01": "7a9a037cf1354f908373a8cc3ee50b7d",
              "usy-fbcore-dataflowsg01": "50bf37a2976b4e35bf55b13f2ee40bc0",
              "usy-fbcore-processcontrolg01": "ce57f8e4dd6c4cd18016ff96641ab9a2",
              "usy-fbcore-gridmodelmergingg01": "8feeda1e494d4f3f9b3cccb593547de3",
              "usy-fbcore-raog01": "d0fdf2eb72474873a63fff64e4f44fe9",
              "usy-fbcore-archiveg01": "2a23221aeaf647398159f830c81b4f90",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "HOPS Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-PSE_WORKSPACE": {
            "appWorkspaces": [
              "PSE_WORKSPACE"
            ],
            "code": "31ab0bb70ac044acbd6de1e1e8a1a221",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "5675e47462454388911271cc3e99d8cc",
              "usy-fbcore-dataflowgwg01": "31ab0bb70ac044acbd6de1e1e8a1a221",
              "usy-fbcore-messageregistryg01": "13959238ee654e4a8ab0f9e69507c63e",
              "usy-fbcore-dataflowsg01": "4cb1efc998714a069b80cb94fd6f4b1d",
              "usy-fbcore-processcontrolg01": "5e56678485b348daad9dfbbe4f4c3f6e",
              "usy-fbcore-gridmodelmergingg01": "45b52de311654b4aa92df13cf83502a6",
              "usy-fbcore-raog01": "3352d631f7a443f3af090daa71a60ab6",
              "usy-fbcore-archiveg01": "d3e4a94a0ddd46c88438cd2efc9b6869",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "PSE Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-SEPS_WORKSPACE": {
            "appWorkspaces": [
              "SEPS_WORKSPACE"
            ],
            "code": "db21aa8b76a545a991894a44f84d30e6",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "466b4fdbea9a413887671f6af12347d0",
              "usy-fbcore-dataflowgwg01": "db21aa8b76a545a991894a44f84d30e6",
              "usy-fbcore-messageregistryg01": "1e4a954b88fd467dacd4bc2eb7ff86c1",
              "usy-fbcore-dataflowsg01": "1ce63c9d348b4ba593c2f3ee1cac7692",
              "usy-fbcore-processcontrolg01": "2bb9bc62a5724f48bce9cd28a1ca7693",
              "usy-fbcore-gridmodelmergingg01": "d07af08d5ec747769eaaa904d78bf9ab",
              "usy-fbcore-raog01": "5feb82f8ce094652967ef11c834ac8f8",
              "usy-fbcore-archiveg01": "18da508bca2244518ac8f6d08674f667",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "SEPS Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TEL_WORKSPACE": {
            "appWorkspaces": [
              "TEL_WORKSPACE"
            ],
            "code": "d9f30d9b16134e7f9881544ddbd4e3e1",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "ecad48cf155a46df9d44020b44fb6610",
              "usy-fbcore-dataflowgwg01": "d9f30d9b16134e7f9881544ddbd4e3e1",
              "usy-fbcore-messageregistryg01": "eece30e39e1143819b8b19ff09aed079",
              "usy-fbcore-dataflowsg01": "299b166ec6a749fc97dffa7ab0d26dd3",
              "usy-fbcore-processcontrolg01": "9dd9be5caa3d4d38839719738ade3a6f",
              "usy-fbcore-gridmodelmergingg01": "f82c1c74f17641c9a661334ca6b3ee78",
              "usy-fbcore-raog01": "c1b10797ec2c4f1c87ece7629c604b28",
              "usy-fbcore-archiveg01": "c81806e27ffb4253bbd05ff5a9a33e67",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TEL Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-APG_WORKSPACE": {
            "appWorkspaces": [
              "APG_WORKSPACE"
            ],
            "code": "f3d16fda85a647f295977e5cf8bd287d",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "da39fa50a4e9408aa2a5f6e7e10afde8",
              "usy-fbcore-dataflowgwg01": "f3d16fda85a647f295977e5cf8bd287d",
              "usy-fbcore-messageregistryg01": "d1e097a350ce402cb27d4a377e2d53c3",
              "usy-fbcore-dataflowsg01": "b232f2c4d7b94fab83cedf6d08d94f0c",
              "usy-fbcore-processcontrolg01": "a18282de978043f28ae3bc311251d19e",
              "usy-fbcore-gridmodelmergingg01": "32b73f6ca365468c99a835274b89519a",
              "usy-fbcore-raog01": "8925f7e4d5cb40eeb42c318e00af36f5",
              "usy-fbcore-archiveg01": "2dbcc97706f746df913518198e748131",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "APG Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-MAVIR_WORKSPACE": {
            "appWorkspaces": [
              "MAVIR_WORKSPACE"
            ],
            "code": "c7f0c56ab513465db583c4ff787e2bd5",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "0c234d8e926841b589900c385f335d0d",
              "usy-fbcore-dataflowgwg01": "c7f0c56ab513465db583c4ff787e2bd5",
              "usy-fbcore-messageregistryg01": "fc5667671d214feba48c54135ab73f51",
              "usy-fbcore-dataflowsg01": "2d1fcd3bafb24abc8ac07b448668e030",
              "usy-fbcore-processcontrolg01": "fe18eb5fc98345ffbc9b3d538566cba9",
              "usy-fbcore-gridmodelmergingg01": "697d9e275c384c349353c05b8e260b5a",
              "usy-fbcore-raog01": "65a1418c03d6429bbdf064b909d45bf6",
              "usy-fbcore-archiveg01": "df32372809494683875fb63d2979df88",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "MAVIR Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-CORESO_WORKSPACE": {
            "appWorkspaces": [
              "CORESO_WORKSPACE"
            ],
            "code": "5a0930f3b88347c1b0a7f3c1feb46259",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "6ce5041ae38b4edb8d45dce9fe4f4fce",
              "usy-fbcore-dataflowgwg01": "5a0930f3b88347c1b0a7f3c1feb46259",
              "usy-fbcore-messageregistryg01": "a89bfacc836348ef89dae8717addbb00",
              "usy-fbcore-dataflowsg01": "3901f2d2de8340b296de8697300dd627",
              "usy-fbcore-processcontrolg01": "e7e071870f0a4cb9ae1c9a97395098a3",
              "usy-fbcore-gridmodelmergingg01": "7955070286a14ef594338c97b7fc2fe3",
              "usy-fbcore-raog01": "185d14d0e8e3423baf9dd7a96e78c335",
              "usy-fbcore-archiveg01": "43ec6f2df5f34bb58ac4671dddfa92e6",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "CORESO Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TSCNET_WORKSPACE": {
            "appWorkspaces": [
              "TSCNET_WORKSPACE"
            ],
            "code": "204dc0b7d9904d85a551a38c0149c997",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "bad29a94cc8148429262adf5aacc1262",
              "usy-fbcore-dataflowgwg01": "204dc0b7d9904d85a551a38c0149c997",
              "usy-fbcore-messageregistryg01": "3d7ed4a358914fb9a7085fbb0ffc2dbb",
              "usy-fbcore-dataflowsg01": "a0d9739335534b05a39f99d96cfbdf20",
              "usy-fbcore-processcontrolg01": "15811e0370b048bd82e3213c18993104",
              "usy-fbcore-gridmodelmergingg01": "f83899d4e4dd4343b1115bdbe336bfec",
              "usy-fbcore-raog01": "3acc4e430995465282ed2816aba62677",
              "usy-fbcore-archiveg01": "dcac140905944e54a46a6ecd1e0d2630",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TSCNET Workspace ",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-UNICORN_WORKSPACE": {
            "appWorkspaces": [
              "UNICORN_WORKSPACE"
            ],
            "code": "a6209f7ec8fe4961862fec49a4d1bdc1",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "cf57e31db5b84cd99edaec017d89f0c1",
              "usy-fbcore-dataflowgwg01": "a6209f7ec8fe4961862fec49a4d1bdc1",
              "usy-fbcore-messageregistryg01": "370bc28e2b674d7081ea9c839eb89a82",
              "usy-fbcore-dataflowsg01": "3a7c8987abfd4fcc88fb2ea3982e98e7",
              "usy-fbcore-processcontrolg01": "d4a30869edc642948814dd7733225fc2",
              "usy-fbcore-gridmodelmergingg01": "c132558ee4bf4bddad88aa9b8a5476ac",
              "usy-fbcore-raog01": "76640feac97a41be86feb7c3faba694e",
              "usy-fbcore-archiveg01": "f307b998707d444d8dfcbc691b39b890",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Unicorn Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-JAO_WORKSPACE": {
            "appWorkspaces": [
              "JAO_WORKSPACE"
            ],
            "code": "1a3ce2ab40dc5dc805264463b3698cdc",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "4f906639d6641c06eb440a2c8af7e25e",
              "usy-fbcore-dataflowgwg01": "1a3ce2ab40dc5dc805264463b3698cdc",
              "usy-fbcore-messageregistryg01": "7297ec08b2c689144d442136d62e1502",
              "usy-fbcore-dataflowsg01": "fcfd4bcc0cd46a8766d0cb55f0accaa8",
              "usy-fbcore-processcontrolg01": "1b1970da528e1b9155271eba4ffd9a36",
              "usy-fbcore-gridmodelmergingg01": "3dac2f4772ac3fe37cb83ce1478657c4",
              "usy-fbcore-raog01": "370118f1a8989305303b8c2b56fb5569",
              "usy-fbcore-archiveg01": "14ddfe80689767143b0492c8dd4bf9c6",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "JAO Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          }
        }
      },
      "usy-fbcore-messageregistryg01": {
        "workspaces": {
          "asid": {
            "appWorkspaces": [
              "asid"
            ],
            "code": "12ec64cc63d543db8fddd484292dede2",
            "uid": "asidOwner"
          },
          "awid-DAILY_PROCESS": {
            "appWorkspaces": [
              "DAILY_PROCESS"
            ],
            "code": "4a573f76fcea479f9d594de8c1077030",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "2ca0ddf56fb14d3d98ac6ebadb2ac764",
              "usy-fbcore-dataflowgwg01": "fef9a1de0a4145aa80dc8dfb44f15db0",
              "usy-fbcore-messageregistryg01": "4a573f76fcea479f9d594de8c1077030",
              "usy-fbcore-dataflowsg01": "8e0ffebb60fb4e4780a0a30085516516",
              "usy-fbcore-processcontrolg01": "8a677e71453f4874b9f5e59bf01b3cc2",
              "usy-fbcore-gridmodelmergingg01": "833de08b97a447a681867b0077f4a4d2",
              "usy-fbcore-raog01": "78047ff8a8bc4bf09be12b7161e40542",
              "usy-fbcore-archiveg01": "53e1c5bd98dd467eaa1be30f1db0e30b",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Daily Process",
                "theme": "default",
                "priority": "1"
              }
            }
          },
          "awid-AMP_WORKSPACE": {
            "appWorkspaces": [
              "AMP_WORKSPACE"
            ],
            "code": "001209568f764136aab717a6b6815e5e",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "454f7d2e137440f4a771fd63725117b8",
              "usy-fbcore-dataflowgwg01": "37d0ebc680484bc88aa86a63a7d0da37",
              "usy-fbcore-messageregistryg01": "001209568f764136aab717a6b6815e5e",
              "usy-fbcore-dataflowsg01": "51ffbd22625c4662ae5dad631ae875e7",
              "usy-fbcore-processcontrolg01": "9bac7812bd844d9ba04ecb60a22a9771",
              "usy-fbcore-gridmodelmergingg01": "a65ab9486e5b4a4d927a73c60e12ebeb",
              "usy-fbcore-raog01": "b9897dc907154578b4f56063abaced4e",
              "usy-fbcore-archiveg01": "f5ce073c1e184e17b1fb76c83faf33d1",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "AMP Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TTG_WORKSPACE": {
            "appWorkspaces": [
              "TTG_WORKSPACE"
            ],
            "code": "2a47d97e28a4499c8563ce9bdfb68aeb",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "a0f4bdcbcbe9496dbf52ab6122a59f87",
              "usy-fbcore-dataflowgwg01": "e487be20959f463f8e4c3092c868b90b",
              "usy-fbcore-messageregistryg01": "2a47d97e28a4499c8563ce9bdfb68aeb",
              "usy-fbcore-dataflowsg01": "65439894a6b346c7b6ade80bb5039ec3",
              "usy-fbcore-processcontrolg01": "889f5692644045f5a5e3c527de65258e",
              "usy-fbcore-gridmodelmergingg01": "d42da9665ab7400fa1d050daade497ef",
              "usy-fbcore-raog01": "49e7487ee05348f283a196d2bf6c928c",
              "usy-fbcore-archiveg01": "e2323c34a2fd4eddb71dd2c4fddb592a",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TTG Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TNG_WORKSPACE": {
            "appWorkspaces": [
              "TNG_WORKSPACE"
            ],
            "code": "d30d37fd075e4c90a28aac747e3211f4",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "3212f51a06424138a0f132ee72f51b04",
              "usy-fbcore-dataflowgwg01": "e90d136bfec945f985f0f7f9ff0aeed3",
              "usy-fbcore-messageregistryg01": "d30d37fd075e4c90a28aac747e3211f4",
              "usy-fbcore-dataflowsg01": "295b6b628d944c6aa09e6fd0a504a6ff",
              "usy-fbcore-processcontrolg01": "d8306fed32f444a790a03be7cb179701",
              "usy-fbcore-gridmodelmergingg01": "d80de50ca4dd4aca906400c05072f448",
              "usy-fbcore-raog01": "2347985cc2634f269e470ef64227a187",
              "usy-fbcore-archiveg01": "900e93c9cd774e5f99efca6c7cca7168",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TNG Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-50HZ_WORKSPACE": {
            "appWorkspaces": [
              "50HZ_WORKSPACE"
            ],
            "code": "dd7644cc8d5a4e4194d37decdf12b030",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "10dff0c3460b4a36b716920a89d8e171",
              "usy-fbcore-dataflowgwg01": "81d6033f551d4d0aa9adc4675a1c1a8d",
              "usy-fbcore-messageregistryg01": "dd7644cc8d5a4e4194d37decdf12b030",
              "usy-fbcore-dataflowsg01": "15419f7958a84071ab705b4000d7a189",
              "usy-fbcore-processcontrolg01": "dcf94a60737140dab61dd932471736bc",
              "usy-fbcore-gridmodelmergingg01": "47ec7c95a8314a5c854025184ef00ae9",
              "usy-fbcore-raog01": "1348a406c20a4542afea37e72c3dbd03",
              "usy-fbcore-archiveg01": "788d9f0f0be145a3bb22713c8724f16a",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "50Hz Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-ELIA_WORKSPACE": {
            "appWorkspaces": [
              "ELIA_WORKSPACE"
            ],
            "code": "cf79830795224548a0ce3e9daf57cb86",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "c741e3a44d824c6a978cb83ea60066b4",
              "usy-fbcore-dataflowgwg01": "9ce5f23b45ba44069b1efd0de2503011",
              "usy-fbcore-messageregistryg01": "cf79830795224548a0ce3e9daf57cb86",
              "usy-fbcore-dataflowsg01": "52bf2b6889f44f658b2f21538f30d9b8",
              "usy-fbcore-processcontrolg01": "b321551e1b8f4ee78eca6b1bc12044e1",
              "usy-fbcore-gridmodelmergingg01": "a687c53c3c1e4df4871df5a7afb7f7f7",
              "usy-fbcore-raog01": "3481e312798e4c27a2ec38f3185115a6",
              "usy-fbcore-archiveg01": "9391057227724d488b765d58de2d00c5",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Elia Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-RTE_WORKSPACE": {
            "appWorkspaces": [
              "RTE_WORKSPACE"
            ],
            "code": "db70e9acdeaa492ca1256a8983c2f367",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "4f032ebb5d7644c4a8482b3cab0c8d95",
              "usy-fbcore-dataflowgwg01": "742a1832e960414daf670d0bb867a99c",
              "usy-fbcore-messageregistryg01": "db70e9acdeaa492ca1256a8983c2f367",
              "usy-fbcore-dataflowsg01": "45a9984723f74e9a8939a859dde4871a",
              "usy-fbcore-processcontrolg01": "c58f4e34f1744656858ee54628df61cb",
              "usy-fbcore-gridmodelmergingg01": "24d977ba941c42088a72ecd33a083c26",
              "usy-fbcore-raog01": "93193a6959bf444e9f5f007a6f05d0a2",
              "usy-fbcore-archiveg01": "0f2146f868ab453185d220a2c2b0d3c9",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "RTE Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TTN_WORKSPACE": {
            "appWorkspaces": [
              "TTN_WORKSPACE"
            ],
            "code": "baf8835d6b1843e080760911f2e6e9d5",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "8227c48bd46f4e18ba8a90876adf552f",
              "usy-fbcore-dataflowgwg01": "4e926830823f48459610b05eff8c78f2",
              "usy-fbcore-messageregistryg01": "baf8835d6b1843e080760911f2e6e9d5",
              "usy-fbcore-dataflowsg01": "53f21dd0a67944caafe4a8e8da4e534e",
              "usy-fbcore-processcontrolg01": "03d400034f124e63a81877f836643cd2",
              "usy-fbcore-gridmodelmergingg01": "8e52cebdb45a4534a3af37977e216347",
              "usy-fbcore-raog01": "f233b7989eb24a888af721fb6afdbb85",
              "usy-fbcore-archiveg01": "2a607e42aa6248f3b81e3c25cce05c55",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TTN Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-CEPS_WORKSPACE": {
            "appWorkspaces": [
              "CEPS_WORKSPACE"
            ],
            "code": "8b4c05e9591d47d89d1ea8f2a3b339f6",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "8be37fcccc5b481e8f41cd7258ef9b61",
              "usy-fbcore-dataflowgwg01": "de05153ea1f1416f9834711185298316",
              "usy-fbcore-messageregistryg01": "8b4c05e9591d47d89d1ea8f2a3b339f6",
              "usy-fbcore-dataflowsg01": "94bb7586474f42779c30f3f6d96d1a56",
              "usy-fbcore-processcontrolg01": "b25bc0fda68a4a06b64059d401035879",
              "usy-fbcore-gridmodelmergingg01": "14b54040569544fb8d86efdad72f5cd6",
              "usy-fbcore-raog01": "c03dde09c00e4de99a57824d189a8a30",
              "usy-fbcore-archiveg01": "50b6908c9c77415699ce62ed3cab9597",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "CEPS Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-ELES_WORKSPACE": {
            "appWorkspaces": [
              "ELES_WORKSPACE"
            ],
            "code": "9d45f5d693554f09a9fb7f6adc47dfe5",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "a5904dae664648669822c01609436dc3",
              "usy-fbcore-dataflowgwg01": "64d07bb7f96b4376b2943c064ded797e",
              "usy-fbcore-messageregistryg01": "9d45f5d693554f09a9fb7f6adc47dfe5",
              "usy-fbcore-dataflowsg01": "f3a2754798434b68a6cf01df61817d4a",
              "usy-fbcore-processcontrolg01": "0bb07dbf21964e02bb49d119a840a8e1",
              "usy-fbcore-gridmodelmergingg01": "5133b9f9594e4cb5935979a8383adeb6",
              "usy-fbcore-raog01": "1714c9614524401b894fe93649514721",
              "usy-fbcore-archiveg01": "c0e250293d4348c5818458db780289c5",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "ELES Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-HOPS_WORKSPACE": {
            "appWorkspaces": [
              "HOPS_WORKSPACE"
            ],
            "code": "7a9a037cf1354f908373a8cc3ee50b7d",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "f104e210f1384583a0d6b5bea1771b08",
              "usy-fbcore-dataflowgwg01": "831dbb8a88744d33824135e8bf4a2a36",
              "usy-fbcore-messageregistryg01": "7a9a037cf1354f908373a8cc3ee50b7d",
              "usy-fbcore-dataflowsg01": "50bf37a2976b4e35bf55b13f2ee40bc0",
              "usy-fbcore-processcontrolg01": "ce57f8e4dd6c4cd18016ff96641ab9a2",
              "usy-fbcore-gridmodelmergingg01": "8feeda1e494d4f3f9b3cccb593547de3",
              "usy-fbcore-raog01": "d0fdf2eb72474873a63fff64e4f44fe9",
              "usy-fbcore-archiveg01": "2a23221aeaf647398159f830c81b4f90",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "HOPS Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-PSE_WORKSPACE": {
            "appWorkspaces": [
              "PSE_WORKSPACE"
            ],
            "code": "13959238ee654e4a8ab0f9e69507c63e",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "5675e47462454388911271cc3e99d8cc",
              "usy-fbcore-dataflowgwg01": "31ab0bb70ac044acbd6de1e1e8a1a221",
              "usy-fbcore-messageregistryg01": "13959238ee654e4a8ab0f9e69507c63e",
              "usy-fbcore-dataflowsg01": "4cb1efc998714a069b80cb94fd6f4b1d",
              "usy-fbcore-processcontrolg01": "5e56678485b348daad9dfbbe4f4c3f6e",
              "usy-fbcore-gridmodelmergingg01": "45b52de311654b4aa92df13cf83502a6",
              "usy-fbcore-raog01": "3352d631f7a443f3af090daa71a60ab6",
              "usy-fbcore-archiveg01": "d3e4a94a0ddd46c88438cd2efc9b6869",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "PSE Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-SEPS_WORKSPACE": {
            "appWorkspaces": [
              "SEPS_WORKSPACE"
            ],
            "code": "1e4a954b88fd467dacd4bc2eb7ff86c1",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "466b4fdbea9a413887671f6af12347d0",
              "usy-fbcore-dataflowgwg01": "db21aa8b76a545a991894a44f84d30e6",
              "usy-fbcore-messageregistryg01": "1e4a954b88fd467dacd4bc2eb7ff86c1",
              "usy-fbcore-dataflowsg01": "1ce63c9d348b4ba593c2f3ee1cac7692",
              "usy-fbcore-processcontrolg01": "2bb9bc62a5724f48bce9cd28a1ca7693",
              "usy-fbcore-gridmodelmergingg01": "d07af08d5ec747769eaaa904d78bf9ab",
              "usy-fbcore-raog01": "5feb82f8ce094652967ef11c834ac8f8",
              "usy-fbcore-archiveg01": "18da508bca2244518ac8f6d08674f667",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "SEPS Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TEL_WORKSPACE": {
            "appWorkspaces": [
              "TEL_WORKSPACE"
            ],
            "code": "eece30e39e1143819b8b19ff09aed079",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "ecad48cf155a46df9d44020b44fb6610",
              "usy-fbcore-dataflowgwg01": "d9f30d9b16134e7f9881544ddbd4e3e1",
              "usy-fbcore-messageregistryg01": "eece30e39e1143819b8b19ff09aed079",
              "usy-fbcore-dataflowsg01": "299b166ec6a749fc97dffa7ab0d26dd3",
              "usy-fbcore-processcontrolg01": "9dd9be5caa3d4d38839719738ade3a6f",
              "usy-fbcore-gridmodelmergingg01": "f82c1c74f17641c9a661334ca6b3ee78",
              "usy-fbcore-raog01": "c1b10797ec2c4f1c87ece7629c604b28",
              "usy-fbcore-archiveg01": "c81806e27ffb4253bbd05ff5a9a33e67",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TEL Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-APG_WORKSPACE": {
            "appWorkspaces": [
              "APG_WORKSPACE"
            ],
            "code": "d1e097a350ce402cb27d4a377e2d53c3",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "da39fa50a4e9408aa2a5f6e7e10afde8",
              "usy-fbcore-dataflowgwg01": "f3d16fda85a647f295977e5cf8bd287d",
              "usy-fbcore-messageregistryg01": "d1e097a350ce402cb27d4a377e2d53c3",
              "usy-fbcore-dataflowsg01": "b232f2c4d7b94fab83cedf6d08d94f0c",
              "usy-fbcore-processcontrolg01": "a18282de978043f28ae3bc311251d19e",
              "usy-fbcore-gridmodelmergingg01": "32b73f6ca365468c99a835274b89519a",
              "usy-fbcore-raog01": "8925f7e4d5cb40eeb42c318e00af36f5",
              "usy-fbcore-archiveg01": "2dbcc97706f746df913518198e748131",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "APG Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-MAVIR_WORKSPACE": {
            "appWorkspaces": [
              "MAVIR_WORKSPACE"
            ],
            "code": "fc5667671d214feba48c54135ab73f51",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "0c234d8e926841b589900c385f335d0d",
              "usy-fbcore-dataflowgwg01": "c7f0c56ab513465db583c4ff787e2bd5",
              "usy-fbcore-messageregistryg01": "fc5667671d214feba48c54135ab73f51",
              "usy-fbcore-dataflowsg01": "2d1fcd3bafb24abc8ac07b448668e030",
              "usy-fbcore-processcontrolg01": "fe18eb5fc98345ffbc9b3d538566cba9",
              "usy-fbcore-gridmodelmergingg01": "697d9e275c384c349353c05b8e260b5a",
              "usy-fbcore-raog01": "65a1418c03d6429bbdf064b909d45bf6",
              "usy-fbcore-archiveg01": "df32372809494683875fb63d2979df88",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "MAVIR Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-CORESO_WORKSPACE": {
            "appWorkspaces": [
              "CORESO_WORKSPACE"
            ],
            "code": "a89bfacc836348ef89dae8717addbb00",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "6ce5041ae38b4edb8d45dce9fe4f4fce",
              "usy-fbcore-dataflowgwg01": "5a0930f3b88347c1b0a7f3c1feb46259",
              "usy-fbcore-messageregistryg01": "a89bfacc836348ef89dae8717addbb00",
              "usy-fbcore-dataflowsg01": "3901f2d2de8340b296de8697300dd627",
              "usy-fbcore-processcontrolg01": "e7e071870f0a4cb9ae1c9a97395098a3",
              "usy-fbcore-gridmodelmergingg01": "7955070286a14ef594338c97b7fc2fe3",
              "usy-fbcore-raog01": "185d14d0e8e3423baf9dd7a96e78c335",
              "usy-fbcore-archiveg01": "43ec6f2df5f34bb58ac4671dddfa92e6",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "CORESO Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TSCNET_WORKSPACE": {
            "appWorkspaces": [
              "TSCNET_WORKSPACE"
            ],
            "code": "3d7ed4a358914fb9a7085fbb0ffc2dbb",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "bad29a94cc8148429262adf5aacc1262",
              "usy-fbcore-dataflowgwg01": "204dc0b7d9904d85a551a38c0149c997",
              "usy-fbcore-messageregistryg01": "3d7ed4a358914fb9a7085fbb0ffc2dbb",
              "usy-fbcore-dataflowsg01": "a0d9739335534b05a39f99d96cfbdf20",
              "usy-fbcore-processcontrolg01": "15811e0370b048bd82e3213c18993104",
              "usy-fbcore-gridmodelmergingg01": "f83899d4e4dd4343b1115bdbe336bfec",
              "usy-fbcore-raog01": "3acc4e430995465282ed2816aba62677",
              "usy-fbcore-archiveg01": "dcac140905944e54a46a6ecd1e0d2630",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TSCNET Workspace ",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-UNICORN_WORKSPACE": {
            "appWorkspaces": [
              "UNICORN_WORKSPACE"
            ],
            "code": "370bc28e2b674d7081ea9c839eb89a82",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "cf57e31db5b84cd99edaec017d89f0c1",
              "usy-fbcore-dataflowgwg01": "a6209f7ec8fe4961862fec49a4d1bdc1",
              "usy-fbcore-messageregistryg01": "370bc28e2b674d7081ea9c839eb89a82",
              "usy-fbcore-dataflowsg01": "3a7c8987abfd4fcc88fb2ea3982e98e7",
              "usy-fbcore-processcontrolg01": "d4a30869edc642948814dd7733225fc2",
              "usy-fbcore-gridmodelmergingg01": "c132558ee4bf4bddad88aa9b8a5476ac",
              "usy-fbcore-raog01": "76640feac97a41be86feb7c3faba694e",
              "usy-fbcore-archiveg01": "f307b998707d444d8dfcbc691b39b890",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Unicorn Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-JAO_WORKSPACE": {
            "appWorkspaces": [
              "JAO_WORKSPACE"
            ],
            "code": "7297ec08b2c689144d442136d62e1502",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "4f906639d6641c06eb440a2c8af7e25e",
              "usy-fbcore-dataflowgwg01": "1a3ce2ab40dc5dc805264463b3698cdc",
              "usy-fbcore-messageregistryg01": "7297ec08b2c689144d442136d62e1502",
              "usy-fbcore-dataflowsg01": "fcfd4bcc0cd46a8766d0cb55f0accaa8",
              "usy-fbcore-processcontrolg01": "1b1970da528e1b9155271eba4ffd9a36",
              "usy-fbcore-gridmodelmergingg01": "3dac2f4772ac3fe37cb83ce1478657c4",
              "usy-fbcore-raog01": "370118f1a8989305303b8c2b56fb5569",
              "usy-fbcore-archiveg01": "14ddfe80689767143b0492c8dd4bf9c6",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "JAO Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          }
        }
      },
      "usy-fbcore-dataflowsg01": {
        "workspaces": {
          "asid": {
            "appWorkspaces": [
              "asid"
            ],
            "code": "72003d84ef5b4cd2930741087836d741",
            "uid": "asidOwner"
          },
          "awid-DAILY_PROCESS": {
            "appWorkspaces": [
              "DAILY_PROCESS"
            ],
            "code": "8e0ffebb60fb4e4780a0a30085516516",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "2ca0ddf56fb14d3d98ac6ebadb2ac764",
              "usy-fbcore-dataflowgwg01": "fef9a1de0a4145aa80dc8dfb44f15db0",
              "usy-fbcore-messageregistryg01": "4a573f76fcea479f9d594de8c1077030",
              "usy-fbcore-dataflowsg01": "8e0ffebb60fb4e4780a0a30085516516",
              "usy-fbcore-processcontrolg01": "8a677e71453f4874b9f5e59bf01b3cc2",
              "usy-fbcore-gridmodelmergingg01": "833de08b97a447a681867b0077f4a4d2",
              "usy-fbcore-raog01": "78047ff8a8bc4bf09be12b7161e40542",
              "usy-fbcore-archiveg01": "53e1c5bd98dd467eaa1be30f1db0e30b",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Daily Process",
                "theme": "default",
                "priority": "1"
              }
            }
          },
          "awid-AMP_WORKSPACE": {
            "appWorkspaces": [
              "AMP_WORKSPACE"
            ],
            "code": "51ffbd22625c4662ae5dad631ae875e7",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "454f7d2e137440f4a771fd63725117b8",
              "usy-fbcore-dataflowgwg01": "37d0ebc680484bc88aa86a63a7d0da37",
              "usy-fbcore-messageregistryg01": "001209568f764136aab717a6b6815e5e",
              "usy-fbcore-dataflowsg01": "51ffbd22625c4662ae5dad631ae875e7",
              "usy-fbcore-processcontrolg01": "9bac7812bd844d9ba04ecb60a22a9771",
              "usy-fbcore-gridmodelmergingg01": "a65ab9486e5b4a4d927a73c60e12ebeb",
              "usy-fbcore-raog01": "b9897dc907154578b4f56063abaced4e",
              "usy-fbcore-archiveg01": "f5ce073c1e184e17b1fb76c83faf33d1",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "AMP Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TTG_WORKSPACE": {
            "appWorkspaces": [
              "TTG_WORKSPACE"
            ],
            "code": "65439894a6b346c7b6ade80bb5039ec3",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "a0f4bdcbcbe9496dbf52ab6122a59f87",
              "usy-fbcore-dataflowgwg01": "e487be20959f463f8e4c3092c868b90b",
              "usy-fbcore-messageregistryg01": "2a47d97e28a4499c8563ce9bdfb68aeb",
              "usy-fbcore-dataflowsg01": "65439894a6b346c7b6ade80bb5039ec3",
              "usy-fbcore-processcontrolg01": "889f5692644045f5a5e3c527de65258e",
              "usy-fbcore-gridmodelmergingg01": "d42da9665ab7400fa1d050daade497ef",
              "usy-fbcore-raog01": "49e7487ee05348f283a196d2bf6c928c",
              "usy-fbcore-archiveg01": "e2323c34a2fd4eddb71dd2c4fddb592a",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TTG Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TNG_WORKSPACE": {
            "appWorkspaces": [
              "TNG_WORKSPACE"
            ],
            "code": "295b6b628d944c6aa09e6fd0a504a6ff",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "3212f51a06424138a0f132ee72f51b04",
              "usy-fbcore-dataflowgwg01": "e90d136bfec945f985f0f7f9ff0aeed3",
              "usy-fbcore-messageregistryg01": "d30d37fd075e4c90a28aac747e3211f4",
              "usy-fbcore-dataflowsg01": "295b6b628d944c6aa09e6fd0a504a6ff",
              "usy-fbcore-processcontrolg01": "d8306fed32f444a790a03be7cb179701",
              "usy-fbcore-gridmodelmergingg01": "d80de50ca4dd4aca906400c05072f448",
              "usy-fbcore-raog01": "2347985cc2634f269e470ef64227a187",
              "usy-fbcore-archiveg01": "900e93c9cd774e5f99efca6c7cca7168",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TNG Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-50HZ_WORKSPACE": {
            "appWorkspaces": [
              "50HZ_WORKSPACE"
            ],
            "code": "15419f7958a84071ab705b4000d7a189",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "10dff0c3460b4a36b716920a89d8e171",
              "usy-fbcore-dataflowgwg01": "81d6033f551d4d0aa9adc4675a1c1a8d",
              "usy-fbcore-messageregistryg01": "dd7644cc8d5a4e4194d37decdf12b030",
              "usy-fbcore-dataflowsg01": "15419f7958a84071ab705b4000d7a189",
              "usy-fbcore-processcontrolg01": "dcf94a60737140dab61dd932471736bc",
              "usy-fbcore-gridmodelmergingg01": "47ec7c95a8314a5c854025184ef00ae9",
              "usy-fbcore-raog01": "1348a406c20a4542afea37e72c3dbd03",
              "usy-fbcore-archiveg01": "788d9f0f0be145a3bb22713c8724f16a",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "50Hz Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-ELIA_WORKSPACE": {
            "appWorkspaces": [
              "ELIA_WORKSPACE"
            ],
            "code": "52bf2b6889f44f658b2f21538f30d9b8",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "c741e3a44d824c6a978cb83ea60066b4",
              "usy-fbcore-dataflowgwg01": "9ce5f23b45ba44069b1efd0de2503011",
              "usy-fbcore-messageregistryg01": "cf79830795224548a0ce3e9daf57cb86",
              "usy-fbcore-dataflowsg01": "52bf2b6889f44f658b2f21538f30d9b8",
              "usy-fbcore-processcontrolg01": "b321551e1b8f4ee78eca6b1bc12044e1",
              "usy-fbcore-gridmodelmergingg01": "a687c53c3c1e4df4871df5a7afb7f7f7",
              "usy-fbcore-raog01": "3481e312798e4c27a2ec38f3185115a6",
              "usy-fbcore-archiveg01": "9391057227724d488b765d58de2d00c5",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Elia Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-RTE_WORKSPACE": {
            "appWorkspaces": [
              "RTE_WORKSPACE"
            ],
            "code": "45a9984723f74e9a8939a859dde4871a",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "4f032ebb5d7644c4a8482b3cab0c8d95",
              "usy-fbcore-dataflowgwg01": "742a1832e960414daf670d0bb867a99c",
              "usy-fbcore-messageregistryg01": "db70e9acdeaa492ca1256a8983c2f367",
              "usy-fbcore-dataflowsg01": "45a9984723f74e9a8939a859dde4871a",
              "usy-fbcore-processcontrolg01": "c58f4e34f1744656858ee54628df61cb",
              "usy-fbcore-gridmodelmergingg01": "24d977ba941c42088a72ecd33a083c26",
              "usy-fbcore-raog01": "93193a6959bf444e9f5f007a6f05d0a2",
              "usy-fbcore-archiveg01": "0f2146f868ab453185d220a2c2b0d3c9",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "RTE Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TTN_WORKSPACE": {
            "appWorkspaces": [
              "TTN_WORKSPACE"
            ],
            "code": "53f21dd0a67944caafe4a8e8da4e534e",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "8227c48bd46f4e18ba8a90876adf552f",
              "usy-fbcore-dataflowgwg01": "4e926830823f48459610b05eff8c78f2",
              "usy-fbcore-messageregistryg01": "baf8835d6b1843e080760911f2e6e9d5",
              "usy-fbcore-dataflowsg01": "53f21dd0a67944caafe4a8e8da4e534e",
              "usy-fbcore-processcontrolg01": "03d400034f124e63a81877f836643cd2",
              "usy-fbcore-gridmodelmergingg01": "8e52cebdb45a4534a3af37977e216347",
              "usy-fbcore-raog01": "f233b7989eb24a888af721fb6afdbb85",
              "usy-fbcore-archiveg01": "2a607e42aa6248f3b81e3c25cce05c55",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TTN Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-CEPS_WORKSPACE": {
            "appWorkspaces": [
              "CEPS_WORKSPACE"
            ],
            "code": "94bb7586474f42779c30f3f6d96d1a56",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "8be37fcccc5b481e8f41cd7258ef9b61",
              "usy-fbcore-dataflowgwg01": "de05153ea1f1416f9834711185298316",
              "usy-fbcore-messageregistryg01": "8b4c05e9591d47d89d1ea8f2a3b339f6",
              "usy-fbcore-dataflowsg01": "94bb7586474f42779c30f3f6d96d1a56",
              "usy-fbcore-processcontrolg01": "b25bc0fda68a4a06b64059d401035879",
              "usy-fbcore-gridmodelmergingg01": "14b54040569544fb8d86efdad72f5cd6",
              "usy-fbcore-raog01": "c03dde09c00e4de99a57824d189a8a30",
              "usy-fbcore-archiveg01": "50b6908c9c77415699ce62ed3cab9597",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "CEPS Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-ELES_WORKSPACE": {
            "appWorkspaces": [
              "ELES_WORKSPACE"
            ],
            "code": "f3a2754798434b68a6cf01df61817d4a",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "a5904dae664648669822c01609436dc3",
              "usy-fbcore-dataflowgwg01": "64d07bb7f96b4376b2943c064ded797e",
              "usy-fbcore-messageregistryg01": "9d45f5d693554f09a9fb7f6adc47dfe5",
              "usy-fbcore-dataflowsg01": "f3a2754798434b68a6cf01df61817d4a",
              "usy-fbcore-processcontrolg01": "0bb07dbf21964e02bb49d119a840a8e1",
              "usy-fbcore-gridmodelmergingg01": "5133b9f9594e4cb5935979a8383adeb6",
              "usy-fbcore-raog01": "1714c9614524401b894fe93649514721",
              "usy-fbcore-archiveg01": "c0e250293d4348c5818458db780289c5",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "ELES Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-HOPS_WORKSPACE": {
            "appWorkspaces": [
              "HOPS_WORKSPACE"
            ],
            "code": "50bf37a2976b4e35bf55b13f2ee40bc0",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "f104e210f1384583a0d6b5bea1771b08",
              "usy-fbcore-dataflowgwg01": "831dbb8a88744d33824135e8bf4a2a36",
              "usy-fbcore-messageregistryg01": "7a9a037cf1354f908373a8cc3ee50b7d",
              "usy-fbcore-dataflowsg01": "50bf37a2976b4e35bf55b13f2ee40bc0",
              "usy-fbcore-processcontrolg01": "ce57f8e4dd6c4cd18016ff96641ab9a2",
              "usy-fbcore-gridmodelmergingg01": "8feeda1e494d4f3f9b3cccb593547de3",
              "usy-fbcore-raog01": "d0fdf2eb72474873a63fff64e4f44fe9",
              "usy-fbcore-archiveg01": "2a23221aeaf647398159f830c81b4f90",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "HOPS Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-PSE_WORKSPACE": {
            "appWorkspaces": [
              "PSE_WORKSPACE"
            ],
            "code": "4cb1efc998714a069b80cb94fd6f4b1d",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "5675e47462454388911271cc3e99d8cc",
              "usy-fbcore-dataflowgwg01": "31ab0bb70ac044acbd6de1e1e8a1a221",
              "usy-fbcore-messageregistryg01": "13959238ee654e4a8ab0f9e69507c63e",
              "usy-fbcore-dataflowsg01": "4cb1efc998714a069b80cb94fd6f4b1d",
              "usy-fbcore-processcontrolg01": "5e56678485b348daad9dfbbe4f4c3f6e",
              "usy-fbcore-gridmodelmergingg01": "45b52de311654b4aa92df13cf83502a6",
              "usy-fbcore-raog01": "3352d631f7a443f3af090daa71a60ab6",
              "usy-fbcore-archiveg01": "d3e4a94a0ddd46c88438cd2efc9b6869",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "PSE Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-SEPS_WORKSPACE": {
            "appWorkspaces": [
              "SEPS_WORKSPACE"
            ],
            "code": "1ce63c9d348b4ba593c2f3ee1cac7692",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "466b4fdbea9a413887671f6af12347d0",
              "usy-fbcore-dataflowgwg01": "db21aa8b76a545a991894a44f84d30e6",
              "usy-fbcore-messageregistryg01": "1e4a954b88fd467dacd4bc2eb7ff86c1",
              "usy-fbcore-dataflowsg01": "1ce63c9d348b4ba593c2f3ee1cac7692",
              "usy-fbcore-processcontrolg01": "2bb9bc62a5724f48bce9cd28a1ca7693",
              "usy-fbcore-gridmodelmergingg01": "d07af08d5ec747769eaaa904d78bf9ab",
              "usy-fbcore-raog01": "5feb82f8ce094652967ef11c834ac8f8",
              "usy-fbcore-archiveg01": "18da508bca2244518ac8f6d08674f667",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "SEPS Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TEL_WORKSPACE": {
            "appWorkspaces": [
              "TEL_WORKSPACE"
            ],
            "code": "299b166ec6a749fc97dffa7ab0d26dd3",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "ecad48cf155a46df9d44020b44fb6610",
              "usy-fbcore-dataflowgwg01": "d9f30d9b16134e7f9881544ddbd4e3e1",
              "usy-fbcore-messageregistryg01": "eece30e39e1143819b8b19ff09aed079",
              "usy-fbcore-dataflowsg01": "299b166ec6a749fc97dffa7ab0d26dd3",
              "usy-fbcore-processcontrolg01": "9dd9be5caa3d4d38839719738ade3a6f",
              "usy-fbcore-gridmodelmergingg01": "f82c1c74f17641c9a661334ca6b3ee78",
              "usy-fbcore-raog01": "c1b10797ec2c4f1c87ece7629c604b28",
              "usy-fbcore-archiveg01": "c81806e27ffb4253bbd05ff5a9a33e67",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TEL Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-APG_WORKSPACE": {
            "appWorkspaces": [
              "APG_WORKSPACE"
            ],
            "code": "b232f2c4d7b94fab83cedf6d08d94f0c",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "da39fa50a4e9408aa2a5f6e7e10afde8",
              "usy-fbcore-dataflowgwg01": "f3d16fda85a647f295977e5cf8bd287d",
              "usy-fbcore-messageregistryg01": "d1e097a350ce402cb27d4a377e2d53c3",
              "usy-fbcore-dataflowsg01": "b232f2c4d7b94fab83cedf6d08d94f0c",
              "usy-fbcore-processcontrolg01": "a18282de978043f28ae3bc311251d19e",
              "usy-fbcore-gridmodelmergingg01": "32b73f6ca365468c99a835274b89519a",
              "usy-fbcore-raog01": "8925f7e4d5cb40eeb42c318e00af36f5",
              "usy-fbcore-archiveg01": "2dbcc97706f746df913518198e748131",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "APG Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-MAVIR_WORKSPACE": {
            "appWorkspaces": [
              "MAVIR_WORKSPACE"
            ],
            "code": "2d1fcd3bafb24abc8ac07b448668e030",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "0c234d8e926841b589900c385f335d0d",
              "usy-fbcore-dataflowgwg01": "c7f0c56ab513465db583c4ff787e2bd5",
              "usy-fbcore-messageregistryg01": "fc5667671d214feba48c54135ab73f51",
              "usy-fbcore-dataflowsg01": "2d1fcd3bafb24abc8ac07b448668e030",
              "usy-fbcore-processcontrolg01": "fe18eb5fc98345ffbc9b3d538566cba9",
              "usy-fbcore-gridmodelmergingg01": "697d9e275c384c349353c05b8e260b5a",
              "usy-fbcore-raog01": "65a1418c03d6429bbdf064b909d45bf6",
              "usy-fbcore-archiveg01": "df32372809494683875fb63d2979df88",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "MAVIR Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-CORESO_WORKSPACE": {
            "appWorkspaces": [
              "CORESO_WORKSPACE"
            ],
            "code": "3901f2d2de8340b296de8697300dd627",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "6ce5041ae38b4edb8d45dce9fe4f4fce",
              "usy-fbcore-dataflowgwg01": "5a0930f3b88347c1b0a7f3c1feb46259",
              "usy-fbcore-messageregistryg01": "a89bfacc836348ef89dae8717addbb00",
              "usy-fbcore-dataflowsg01": "3901f2d2de8340b296de8697300dd627",
              "usy-fbcore-processcontrolg01": "e7e071870f0a4cb9ae1c9a97395098a3",
              "usy-fbcore-gridmodelmergingg01": "7955070286a14ef594338c97b7fc2fe3",
              "usy-fbcore-raog01": "185d14d0e8e3423baf9dd7a96e78c335",
              "usy-fbcore-archiveg01": "43ec6f2df5f34bb58ac4671dddfa92e6",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "CORESO Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TSCNET_WORKSPACE": {
            "appWorkspaces": [
              "TSCNET_WORKSPACE"
            ],
            "code": "a0d9739335534b05a39f99d96cfbdf20",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "bad29a94cc8148429262adf5aacc1262",
              "usy-fbcore-dataflowgwg01": "204dc0b7d9904d85a551a38c0149c997",
              "usy-fbcore-messageregistryg01": "3d7ed4a358914fb9a7085fbb0ffc2dbb",
              "usy-fbcore-dataflowsg01": "a0d9739335534b05a39f99d96cfbdf20",
              "usy-fbcore-processcontrolg01": "15811e0370b048bd82e3213c18993104",
              "usy-fbcore-gridmodelmergingg01": "f83899d4e4dd4343b1115bdbe336bfec",
              "usy-fbcore-raog01": "3acc4e430995465282ed2816aba62677",
              "usy-fbcore-archiveg01": "dcac140905944e54a46a6ecd1e0d2630",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TSCNET Workspace ",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-UNICORN_WORKSPACE": {
            "appWorkspaces": [
              "UNICORN_WORKSPACE"
            ],
            "code": "3a7c8987abfd4fcc88fb2ea3982e98e7",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "cf57e31db5b84cd99edaec017d89f0c1",
              "usy-fbcore-dataflowgwg01": "a6209f7ec8fe4961862fec49a4d1bdc1",
              "usy-fbcore-messageregistryg01": "370bc28e2b674d7081ea9c839eb89a82",
              "usy-fbcore-dataflowsg01": "3a7c8987abfd4fcc88fb2ea3982e98e7",
              "usy-fbcore-processcontrolg01": "d4a30869edc642948814dd7733225fc2",
              "usy-fbcore-gridmodelmergingg01": "c132558ee4bf4bddad88aa9b8a5476ac",
              "usy-fbcore-raog01": "76640feac97a41be86feb7c3faba694e",
              "usy-fbcore-archiveg01": "f307b998707d444d8dfcbc691b39b890",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Unicorn Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-JAO_WORKSPACE": {
            "appWorkspaces": [
              "JAO_WORKSPACE"
            ],
            "code": "fcfd4bcc0cd46a8766d0cb55f0accaa8",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "4f906639d6641c06eb440a2c8af7e25e",
              "usy-fbcore-dataflowgwg01": "1a3ce2ab40dc5dc805264463b3698cdc",
              "usy-fbcore-messageregistryg01": "7297ec08b2c689144d442136d62e1502",
              "usy-fbcore-dataflowsg01": "fcfd4bcc0cd46a8766d0cb55f0accaa8",
              "usy-fbcore-processcontrolg01": "1b1970da528e1b9155271eba4ffd9a36",
              "usy-fbcore-gridmodelmergingg01": "3dac2f4772ac3fe37cb83ce1478657c4",
              "usy-fbcore-raog01": "370118f1a8989305303b8c2b56fb5569",
              "usy-fbcore-archiveg01": "14ddfe80689767143b0492c8dd4bf9c6",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "JAO Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          }
        }
      },
      "usy-fbcore-processcontrolg01": {
        "workspaces": {
          "asid": {
            "appWorkspaces": [
              "asid"
            ],
            "code": "66f82504b8584ac4afbf4282ba926d66",
            "uid": "asidOwner"
          },
          "awid-DAILY_PROCESS": {
            "appWorkspaces": [
              "DAILY_PROCESS"
            ],
            "code": "8a677e71453f4874b9f5e59bf01b3cc2",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "2ca0ddf56fb14d3d98ac6ebadb2ac764",
              "usy-fbcore-dataflowgwg01": "fef9a1de0a4145aa80dc8dfb44f15db0",
              "usy-fbcore-messageregistryg01": "4a573f76fcea479f9d594de8c1077030",
              "usy-fbcore-dataflowsg01": "8e0ffebb60fb4e4780a0a30085516516",
              "usy-fbcore-processcontrolg01": "8a677e71453f4874b9f5e59bf01b3cc2",
              "usy-fbcore-gridmodelmergingg01": "833de08b97a447a681867b0077f4a4d2",
              "usy-fbcore-raog01": "78047ff8a8bc4bf09be12b7161e40542",
              "usy-fbcore-archiveg01": "53e1c5bd98dd467eaa1be30f1db0e30b",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Daily Process",
                "theme": "default",
                "priority": "1"
              }
            }
          },
          "awid-AMP_WORKSPACE": {
            "appWorkspaces": [
              "AMP_WORKSPACE"
            ],
            "code": "9bac7812bd844d9ba04ecb60a22a9771",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "454f7d2e137440f4a771fd63725117b8",
              "usy-fbcore-dataflowgwg01": "37d0ebc680484bc88aa86a63a7d0da37",
              "usy-fbcore-messageregistryg01": "001209568f764136aab717a6b6815e5e",
              "usy-fbcore-dataflowsg01": "51ffbd22625c4662ae5dad631ae875e7",
              "usy-fbcore-processcontrolg01": "9bac7812bd844d9ba04ecb60a22a9771",
              "usy-fbcore-gridmodelmergingg01": "a65ab9486e5b4a4d927a73c60e12ebeb",
              "usy-fbcore-raog01": "b9897dc907154578b4f56063abaced4e",
              "usy-fbcore-archiveg01": "f5ce073c1e184e17b1fb76c83faf33d1",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "AMP Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TTG_WORKSPACE": {
            "appWorkspaces": [
              "TTG_WORKSPACE"
            ],
            "code": "889f5692644045f5a5e3c527de65258e",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "a0f4bdcbcbe9496dbf52ab6122a59f87",
              "usy-fbcore-dataflowgwg01": "e487be20959f463f8e4c3092c868b90b",
              "usy-fbcore-messageregistryg01": "2a47d97e28a4499c8563ce9bdfb68aeb",
              "usy-fbcore-dataflowsg01": "65439894a6b346c7b6ade80bb5039ec3",
              "usy-fbcore-processcontrolg01": "889f5692644045f5a5e3c527de65258e",
              "usy-fbcore-gridmodelmergingg01": "d42da9665ab7400fa1d050daade497ef",
              "usy-fbcore-raog01": "49e7487ee05348f283a196d2bf6c928c",
              "usy-fbcore-archiveg01": "e2323c34a2fd4eddb71dd2c4fddb592a",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TTG Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TNG_WORKSPACE": {
            "appWorkspaces": [
              "TNG_WORKSPACE"
            ],
            "code": "d8306fed32f444a790a03be7cb179701",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "3212f51a06424138a0f132ee72f51b04",
              "usy-fbcore-dataflowgwg01": "e90d136bfec945f985f0f7f9ff0aeed3",
              "usy-fbcore-messageregistryg01": "d30d37fd075e4c90a28aac747e3211f4",
              "usy-fbcore-dataflowsg01": "295b6b628d944c6aa09e6fd0a504a6ff",
              "usy-fbcore-processcontrolg01": "d8306fed32f444a790a03be7cb179701",
              "usy-fbcore-gridmodelmergingg01": "d80de50ca4dd4aca906400c05072f448",
              "usy-fbcore-raog01": "2347985cc2634f269e470ef64227a187",
              "usy-fbcore-archiveg01": "900e93c9cd774e5f99efca6c7cca7168",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TNG Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-50HZ_WORKSPACE": {
            "appWorkspaces": [
              "50HZ_WORKSPACE"
            ],
            "code": "dcf94a60737140dab61dd932471736bc",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "10dff0c3460b4a36b716920a89d8e171",
              "usy-fbcore-dataflowgwg01": "81d6033f551d4d0aa9adc4675a1c1a8d",
              "usy-fbcore-messageregistryg01": "dd7644cc8d5a4e4194d37decdf12b030",
              "usy-fbcore-dataflowsg01": "15419f7958a84071ab705b4000d7a189",
              "usy-fbcore-processcontrolg01": "dcf94a60737140dab61dd932471736bc",
              "usy-fbcore-gridmodelmergingg01": "47ec7c95a8314a5c854025184ef00ae9",
              "usy-fbcore-raog01": "1348a406c20a4542afea37e72c3dbd03",
              "usy-fbcore-archiveg01": "788d9f0f0be145a3bb22713c8724f16a",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "50Hz Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-ELIA_WORKSPACE": {
            "appWorkspaces": [
              "ELIA_WORKSPACE"
            ],
            "code": "b321551e1b8f4ee78eca6b1bc12044e1",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "c741e3a44d824c6a978cb83ea60066b4",
              "usy-fbcore-dataflowgwg01": "9ce5f23b45ba44069b1efd0de2503011",
              "usy-fbcore-messageregistryg01": "cf79830795224548a0ce3e9daf57cb86",
              "usy-fbcore-dataflowsg01": "52bf2b6889f44f658b2f21538f30d9b8",
              "usy-fbcore-processcontrolg01": "b321551e1b8f4ee78eca6b1bc12044e1",
              "usy-fbcore-gridmodelmergingg01": "a687c53c3c1e4df4871df5a7afb7f7f7",
              "usy-fbcore-raog01": "3481e312798e4c27a2ec38f3185115a6",
              "usy-fbcore-archiveg01": "9391057227724d488b765d58de2d00c5",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Elia Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-RTE_WORKSPACE": {
            "appWorkspaces": [
              "RTE_WORKSPACE"
            ],
            "code": "c58f4e34f1744656858ee54628df61cb",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "4f032ebb5d7644c4a8482b3cab0c8d95",
              "usy-fbcore-dataflowgwg01": "742a1832e960414daf670d0bb867a99c",
              "usy-fbcore-messageregistryg01": "db70e9acdeaa492ca1256a8983c2f367",
              "usy-fbcore-dataflowsg01": "45a9984723f74e9a8939a859dde4871a",
              "usy-fbcore-processcontrolg01": "c58f4e34f1744656858ee54628df61cb",
              "usy-fbcore-gridmodelmergingg01": "24d977ba941c42088a72ecd33a083c26",
              "usy-fbcore-raog01": "93193a6959bf444e9f5f007a6f05d0a2",
              "usy-fbcore-archiveg01": "0f2146f868ab453185d220a2c2b0d3c9",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "RTE Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TTN_WORKSPACE": {
            "appWorkspaces": [
              "TTN_WORKSPACE"
            ],
            "code": "03d400034f124e63a81877f836643cd2",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "8227c48bd46f4e18ba8a90876adf552f",
              "usy-fbcore-dataflowgwg01": "4e926830823f48459610b05eff8c78f2",
              "usy-fbcore-messageregistryg01": "baf8835d6b1843e080760911f2e6e9d5",
              "usy-fbcore-dataflowsg01": "53f21dd0a67944caafe4a8e8da4e534e",
              "usy-fbcore-processcontrolg01": "03d400034f124e63a81877f836643cd2",
              "usy-fbcore-gridmodelmergingg01": "8e52cebdb45a4534a3af37977e216347",
              "usy-fbcore-raog01": "f233b7989eb24a888af721fb6afdbb85",
              "usy-fbcore-archiveg01": "2a607e42aa6248f3b81e3c25cce05c55",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TTN Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-CEPS_WORKSPACE": {
            "appWorkspaces": [
              "CEPS_WORKSPACE"
            ],
            "code": "b25bc0fda68a4a06b64059d401035879",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "8be37fcccc5b481e8f41cd7258ef9b61",
              "usy-fbcore-dataflowgwg01": "de05153ea1f1416f9834711185298316",
              "usy-fbcore-messageregistryg01": "8b4c05e9591d47d89d1ea8f2a3b339f6",
              "usy-fbcore-dataflowsg01": "94bb7586474f42779c30f3f6d96d1a56",
              "usy-fbcore-processcontrolg01": "b25bc0fda68a4a06b64059d401035879",
              "usy-fbcore-gridmodelmergingg01": "14b54040569544fb8d86efdad72f5cd6",
              "usy-fbcore-raog01": "c03dde09c00e4de99a57824d189a8a30",
              "usy-fbcore-archiveg01": "50b6908c9c77415699ce62ed3cab9597",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "CEPS Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-ELES_WORKSPACE": {
            "appWorkspaces": [
              "ELES_WORKSPACE"
            ],
            "code": "0bb07dbf21964e02bb49d119a840a8e1",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "a5904dae664648669822c01609436dc3",
              "usy-fbcore-dataflowgwg01": "64d07bb7f96b4376b2943c064ded797e",
              "usy-fbcore-messageregistryg01": "9d45f5d693554f09a9fb7f6adc47dfe5",
              "usy-fbcore-dataflowsg01": "f3a2754798434b68a6cf01df61817d4a",
              "usy-fbcore-processcontrolg01": "0bb07dbf21964e02bb49d119a840a8e1",
              "usy-fbcore-gridmodelmergingg01": "5133b9f9594e4cb5935979a8383adeb6",
              "usy-fbcore-raog01": "1714c9614524401b894fe93649514721",
              "usy-fbcore-archiveg01": "c0e250293d4348c5818458db780289c5",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "ELES Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-HOPS_WORKSPACE": {
            "appWorkspaces": [
              "HOPS_WORKSPACE"
            ],
            "code": "ce57f8e4dd6c4cd18016ff96641ab9a2",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "f104e210f1384583a0d6b5bea1771b08",
              "usy-fbcore-dataflowgwg01": "831dbb8a88744d33824135e8bf4a2a36",
              "usy-fbcore-messageregistryg01": "7a9a037cf1354f908373a8cc3ee50b7d",
              "usy-fbcore-dataflowsg01": "50bf37a2976b4e35bf55b13f2ee40bc0",
              "usy-fbcore-processcontrolg01": "ce57f8e4dd6c4cd18016ff96641ab9a2",
              "usy-fbcore-gridmodelmergingg01": "8feeda1e494d4f3f9b3cccb593547de3",
              "usy-fbcore-raog01": "d0fdf2eb72474873a63fff64e4f44fe9",
              "usy-fbcore-archiveg01": "2a23221aeaf647398159f830c81b4f90",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "HOPS Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-PSE_WORKSPACE": {
            "appWorkspaces": [
              "PSE_WORKSPACE"
            ],
            "code": "5e56678485b348daad9dfbbe4f4c3f6e",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "5675e47462454388911271cc3e99d8cc",
              "usy-fbcore-dataflowgwg01": "31ab0bb70ac044acbd6de1e1e8a1a221",
              "usy-fbcore-messageregistryg01": "13959238ee654e4a8ab0f9e69507c63e",
              "usy-fbcore-dataflowsg01": "4cb1efc998714a069b80cb94fd6f4b1d",
              "usy-fbcore-processcontrolg01": "5e56678485b348daad9dfbbe4f4c3f6e",
              "usy-fbcore-gridmodelmergingg01": "45b52de311654b4aa92df13cf83502a6",
              "usy-fbcore-raog01": "3352d631f7a443f3af090daa71a60ab6",
              "usy-fbcore-archiveg01": "d3e4a94a0ddd46c88438cd2efc9b6869",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "PSE Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-SEPS_WORKSPACE": {
            "appWorkspaces": [
              "SEPS_WORKSPACE"
            ],
            "code": "2bb9bc62a5724f48bce9cd28a1ca7693",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "466b4fdbea9a413887671f6af12347d0",
              "usy-fbcore-dataflowgwg01": "db21aa8b76a545a991894a44f84d30e6",
              "usy-fbcore-messageregistryg01": "1e4a954b88fd467dacd4bc2eb7ff86c1",
              "usy-fbcore-dataflowsg01": "1ce63c9d348b4ba593c2f3ee1cac7692",
              "usy-fbcore-processcontrolg01": "2bb9bc62a5724f48bce9cd28a1ca7693",
              "usy-fbcore-gridmodelmergingg01": "d07af08d5ec747769eaaa904d78bf9ab",
              "usy-fbcore-raog01": "5feb82f8ce094652967ef11c834ac8f8",
              "usy-fbcore-archiveg01": "18da508bca2244518ac8f6d08674f667",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "SEPS Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TEL_WORKSPACE": {
            "appWorkspaces": [
              "TEL_WORKSPACE"
            ],
            "code": "9dd9be5caa3d4d38839719738ade3a6f",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "ecad48cf155a46df9d44020b44fb6610",
              "usy-fbcore-dataflowgwg01": "d9f30d9b16134e7f9881544ddbd4e3e1",
              "usy-fbcore-messageregistryg01": "eece30e39e1143819b8b19ff09aed079",
              "usy-fbcore-dataflowsg01": "299b166ec6a749fc97dffa7ab0d26dd3",
              "usy-fbcore-processcontrolg01": "9dd9be5caa3d4d38839719738ade3a6f",
              "usy-fbcore-gridmodelmergingg01": "f82c1c74f17641c9a661334ca6b3ee78",
              "usy-fbcore-raog01": "c1b10797ec2c4f1c87ece7629c604b28",
              "usy-fbcore-archiveg01": "c81806e27ffb4253bbd05ff5a9a33e67",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TEL Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-APG_WORKSPACE": {
            "appWorkspaces": [
              "APG_WORKSPACE"
            ],
            "code": "a18282de978043f28ae3bc311251d19e",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "da39fa50a4e9408aa2a5f6e7e10afde8",
              "usy-fbcore-dataflowgwg01": "f3d16fda85a647f295977e5cf8bd287d",
              "usy-fbcore-messageregistryg01": "d1e097a350ce402cb27d4a377e2d53c3",
              "usy-fbcore-dataflowsg01": "b232f2c4d7b94fab83cedf6d08d94f0c",
              "usy-fbcore-processcontrolg01": "a18282de978043f28ae3bc311251d19e",
              "usy-fbcore-gridmodelmergingg01": "32b73f6ca365468c99a835274b89519a",
              "usy-fbcore-raog01": "8925f7e4d5cb40eeb42c318e00af36f5",
              "usy-fbcore-archiveg01": "2dbcc97706f746df913518198e748131",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "APG Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-MAVIR_WORKSPACE": {
            "appWorkspaces": [
              "MAVIR_WORKSPACE"
            ],
            "code": "fe18eb5fc98345ffbc9b3d538566cba9",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "0c234d8e926841b589900c385f335d0d",
              "usy-fbcore-dataflowgwg01": "c7f0c56ab513465db583c4ff787e2bd5",
              "usy-fbcore-messageregistryg01": "fc5667671d214feba48c54135ab73f51",
              "usy-fbcore-dataflowsg01": "2d1fcd3bafb24abc8ac07b448668e030",
              "usy-fbcore-processcontrolg01": "fe18eb5fc98345ffbc9b3d538566cba9",
              "usy-fbcore-gridmodelmergingg01": "697d9e275c384c349353c05b8e260b5a",
              "usy-fbcore-raog01": "65a1418c03d6429bbdf064b909d45bf6",
              "usy-fbcore-archiveg01": "df32372809494683875fb63d2979df88",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "MAVIR Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-CORESO_WORKSPACE": {
            "appWorkspaces": [
              "CORESO_WORKSPACE"
            ],
            "code": "e7e071870f0a4cb9ae1c9a97395098a3",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "6ce5041ae38b4edb8d45dce9fe4f4fce",
              "usy-fbcore-dataflowgwg01": "5a0930f3b88347c1b0a7f3c1feb46259",
              "usy-fbcore-messageregistryg01": "a89bfacc836348ef89dae8717addbb00",
              "usy-fbcore-dataflowsg01": "3901f2d2de8340b296de8697300dd627",
              "usy-fbcore-processcontrolg01": "e7e071870f0a4cb9ae1c9a97395098a3",
              "usy-fbcore-gridmodelmergingg01": "7955070286a14ef594338c97b7fc2fe3",
              "usy-fbcore-raog01": "185d14d0e8e3423baf9dd7a96e78c335",
              "usy-fbcore-archiveg01": "43ec6f2df5f34bb58ac4671dddfa92e6",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "CORESO Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TSCNET_WORKSPACE": {
            "appWorkspaces": [
              "TSCNET_WORKSPACE"
            ],
            "code": "15811e0370b048bd82e3213c18993104",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "bad29a94cc8148429262adf5aacc1262",
              "usy-fbcore-dataflowgwg01": "204dc0b7d9904d85a551a38c0149c997",
              "usy-fbcore-messageregistryg01": "3d7ed4a358914fb9a7085fbb0ffc2dbb",
              "usy-fbcore-dataflowsg01": "a0d9739335534b05a39f99d96cfbdf20",
              "usy-fbcore-processcontrolg01": "15811e0370b048bd82e3213c18993104",
              "usy-fbcore-gridmodelmergingg01": "f83899d4e4dd4343b1115bdbe336bfec",
              "usy-fbcore-raog01": "3acc4e430995465282ed2816aba62677",
              "usy-fbcore-archiveg01": "dcac140905944e54a46a6ecd1e0d2630",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TSCNET Workspace ",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-UNICORN_WORKSPACE": {
            "appWorkspaces": [
              "UNICORN_WORKSPACE"
            ],
            "code": "d4a30869edc642948814dd7733225fc2",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "cf57e31db5b84cd99edaec017d89f0c1",
              "usy-fbcore-dataflowgwg01": "a6209f7ec8fe4961862fec49a4d1bdc1",
              "usy-fbcore-messageregistryg01": "370bc28e2b674d7081ea9c839eb89a82",
              "usy-fbcore-dataflowsg01": "3a7c8987abfd4fcc88fb2ea3982e98e7",
              "usy-fbcore-processcontrolg01": "d4a30869edc642948814dd7733225fc2",
              "usy-fbcore-gridmodelmergingg01": "c132558ee4bf4bddad88aa9b8a5476ac",
              "usy-fbcore-raog01": "76640feac97a41be86feb7c3faba694e",
              "usy-fbcore-archiveg01": "f307b998707d444d8dfcbc691b39b890",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Unicorn Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-JAO_WORKSPACE": {
            "appWorkspaces": [
              "JAO_WORKSPACE"
            ],
            "code": "1b1970da528e1b9155271eba4ffd9a36",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "4f906639d6641c06eb440a2c8af7e25e",
              "usy-fbcore-dataflowgwg01": "1a3ce2ab40dc5dc805264463b3698cdc",
              "usy-fbcore-messageregistryg01": "7297ec08b2c689144d442136d62e1502",
              "usy-fbcore-dataflowsg01": "fcfd4bcc0cd46a8766d0cb55f0accaa8",
              "usy-fbcore-processcontrolg01": "1b1970da528e1b9155271eba4ffd9a36",
              "usy-fbcore-gridmodelmergingg01": "3dac2f4772ac3fe37cb83ce1478657c4",
              "usy-fbcore-raog01": "370118f1a8989305303b8c2b56fb5569",
              "usy-fbcore-archiveg01": "14ddfe80689767143b0492c8dd4bf9c6",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "JAO Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          }
        }
      },
      "usy-fbcore-gridmodelmergingg01": {
        "workspaces": {
          "asid": {
            "appWorkspaces": [
              "asid"
            ],
            "code": "8aed0460a7904d098e1662bca9668f32",
            "uid": "asidOwner"
          },
          "awid-DAILY_PROCESS": {
            "appWorkspaces": [
              "DAILY_PROCESS"
            ],
            "code": "833de08b97a447a681867b0077f4a4d2",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "2ca0ddf56fb14d3d98ac6ebadb2ac764",
              "usy-fbcore-dataflowgwg01": "fef9a1de0a4145aa80dc8dfb44f15db0",
              "usy-fbcore-messageregistryg01": "4a573f76fcea479f9d594de8c1077030",
              "usy-fbcore-dataflowsg01": "8e0ffebb60fb4e4780a0a30085516516",
              "usy-fbcore-processcontrolg01": "8a677e71453f4874b9f5e59bf01b3cc2",
              "usy-fbcore-gridmodelmergingg01": "833de08b97a447a681867b0077f4a4d2",
              "usy-fbcore-raog01": "78047ff8a8bc4bf09be12b7161e40542",
              "usy-fbcore-archiveg01": "53e1c5bd98dd467eaa1be30f1db0e30b",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Daily Process",
                "theme": "default",
                "priority": "1"
              }
            }
          },
          "awid-AMP_WORKSPACE": {
            "appWorkspaces": [
              "AMP_WORKSPACE"
            ],
            "code": "a65ab9486e5b4a4d927a73c60e12ebeb",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "454f7d2e137440f4a771fd63725117b8",
              "usy-fbcore-dataflowgwg01": "37d0ebc680484bc88aa86a63a7d0da37",
              "usy-fbcore-messageregistryg01": "001209568f764136aab717a6b6815e5e",
              "usy-fbcore-dataflowsg01": "51ffbd22625c4662ae5dad631ae875e7",
              "usy-fbcore-processcontrolg01": "9bac7812bd844d9ba04ecb60a22a9771",
              "usy-fbcore-gridmodelmergingg01": "a65ab9486e5b4a4d927a73c60e12ebeb",
              "usy-fbcore-raog01": "b9897dc907154578b4f56063abaced4e",
              "usy-fbcore-archiveg01": "f5ce073c1e184e17b1fb76c83faf33d1",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "AMP Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TTG_WORKSPACE": {
            "appWorkspaces": [
              "TTG_WORKSPACE"
            ],
            "code": "d42da9665ab7400fa1d050daade497ef",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "a0f4bdcbcbe9496dbf52ab6122a59f87",
              "usy-fbcore-dataflowgwg01": "e487be20959f463f8e4c3092c868b90b",
              "usy-fbcore-messageregistryg01": "2a47d97e28a4499c8563ce9bdfb68aeb",
              "usy-fbcore-dataflowsg01": "65439894a6b346c7b6ade80bb5039ec3",
              "usy-fbcore-processcontrolg01": "889f5692644045f5a5e3c527de65258e",
              "usy-fbcore-gridmodelmergingg01": "d42da9665ab7400fa1d050daade497ef",
              "usy-fbcore-raog01": "49e7487ee05348f283a196d2bf6c928c",
              "usy-fbcore-archiveg01": "e2323c34a2fd4eddb71dd2c4fddb592a",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TTG Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TNG_WORKSPACE": {
            "appWorkspaces": [
              "TNG_WORKSPACE"
            ],
            "code": "d80de50ca4dd4aca906400c05072f448",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "3212f51a06424138a0f132ee72f51b04",
              "usy-fbcore-dataflowgwg01": "e90d136bfec945f985f0f7f9ff0aeed3",
              "usy-fbcore-messageregistryg01": "d30d37fd075e4c90a28aac747e3211f4",
              "usy-fbcore-dataflowsg01": "295b6b628d944c6aa09e6fd0a504a6ff",
              "usy-fbcore-processcontrolg01": "d8306fed32f444a790a03be7cb179701",
              "usy-fbcore-gridmodelmergingg01": "d80de50ca4dd4aca906400c05072f448",
              "usy-fbcore-raog01": "2347985cc2634f269e470ef64227a187",
              "usy-fbcore-archiveg01": "900e93c9cd774e5f99efca6c7cca7168",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TNG Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-50HZ_WORKSPACE": {
            "appWorkspaces": [
              "50HZ_WORKSPACE"
            ],
            "code": "47ec7c95a8314a5c854025184ef00ae9",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "10dff0c3460b4a36b716920a89d8e171",
              "usy-fbcore-dataflowgwg01": "81d6033f551d4d0aa9adc4675a1c1a8d",
              "usy-fbcore-messageregistryg01": "dd7644cc8d5a4e4194d37decdf12b030",
              "usy-fbcore-dataflowsg01": "15419f7958a84071ab705b4000d7a189",
              "usy-fbcore-processcontrolg01": "dcf94a60737140dab61dd932471736bc",
              "usy-fbcore-gridmodelmergingg01": "47ec7c95a8314a5c854025184ef00ae9",
              "usy-fbcore-raog01": "1348a406c20a4542afea37e72c3dbd03",
              "usy-fbcore-archiveg01": "788d9f0f0be145a3bb22713c8724f16a",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "50Hz Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-ELIA_WORKSPACE": {
            "appWorkspaces": [
              "ELIA_WORKSPACE"
            ],
            "code": "a687c53c3c1e4df4871df5a7afb7f7f7",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "c741e3a44d824c6a978cb83ea60066b4",
              "usy-fbcore-dataflowgwg01": "9ce5f23b45ba44069b1efd0de2503011",
              "usy-fbcore-messageregistryg01": "cf79830795224548a0ce3e9daf57cb86",
              "usy-fbcore-dataflowsg01": "52bf2b6889f44f658b2f21538f30d9b8",
              "usy-fbcore-processcontrolg01": "b321551e1b8f4ee78eca6b1bc12044e1",
              "usy-fbcore-gridmodelmergingg01": "a687c53c3c1e4df4871df5a7afb7f7f7",
              "usy-fbcore-raog01": "3481e312798e4c27a2ec38f3185115a6",
              "usy-fbcore-archiveg01": "9391057227724d488b765d58de2d00c5",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Elia Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-RTE_WORKSPACE": {
            "appWorkspaces": [
              "RTE_WORKSPACE"
            ],
            "code": "24d977ba941c42088a72ecd33a083c26",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "4f032ebb5d7644c4a8482b3cab0c8d95",
              "usy-fbcore-dataflowgwg01": "742a1832e960414daf670d0bb867a99c",
              "usy-fbcore-messageregistryg01": "db70e9acdeaa492ca1256a8983c2f367",
              "usy-fbcore-dataflowsg01": "45a9984723f74e9a8939a859dde4871a",
              "usy-fbcore-processcontrolg01": "c58f4e34f1744656858ee54628df61cb",
              "usy-fbcore-gridmodelmergingg01": "24d977ba941c42088a72ecd33a083c26",
              "usy-fbcore-raog01": "93193a6959bf444e9f5f007a6f05d0a2",
              "usy-fbcore-archiveg01": "0f2146f868ab453185d220a2c2b0d3c9",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "RTE Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TTN_WORKSPACE": {
            "appWorkspaces": [
              "TTN_WORKSPACE"
            ],
            "code": "8e52cebdb45a4534a3af37977e216347",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "8227c48bd46f4e18ba8a90876adf552f",
              "usy-fbcore-dataflowgwg01": "4e926830823f48459610b05eff8c78f2",
              "usy-fbcore-messageregistryg01": "baf8835d6b1843e080760911f2e6e9d5",
              "usy-fbcore-dataflowsg01": "53f21dd0a67944caafe4a8e8da4e534e",
              "usy-fbcore-processcontrolg01": "03d400034f124e63a81877f836643cd2",
              "usy-fbcore-gridmodelmergingg01": "8e52cebdb45a4534a3af37977e216347",
              "usy-fbcore-raog01": "f233b7989eb24a888af721fb6afdbb85",
              "usy-fbcore-archiveg01": "2a607e42aa6248f3b81e3c25cce05c55",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TTN Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-CEPS_WORKSPACE": {
            "appWorkspaces": [
              "CEPS_WORKSPACE"
            ],
            "code": "14b54040569544fb8d86efdad72f5cd6",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "8be37fcccc5b481e8f41cd7258ef9b61",
              "usy-fbcore-dataflowgwg01": "de05153ea1f1416f9834711185298316",
              "usy-fbcore-messageregistryg01": "8b4c05e9591d47d89d1ea8f2a3b339f6",
              "usy-fbcore-dataflowsg01": "94bb7586474f42779c30f3f6d96d1a56",
              "usy-fbcore-processcontrolg01": "b25bc0fda68a4a06b64059d401035879",
              "usy-fbcore-gridmodelmergingg01": "14b54040569544fb8d86efdad72f5cd6",
              "usy-fbcore-raog01": "c03dde09c00e4de99a57824d189a8a30",
              "usy-fbcore-archiveg01": "50b6908c9c77415699ce62ed3cab9597",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "CEPS Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-ELES_WORKSPACE": {
            "appWorkspaces": [
              "ELES_WORKSPACE"
            ],
            "code": "5133b9f9594e4cb5935979a8383adeb6",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "a5904dae664648669822c01609436dc3",
              "usy-fbcore-dataflowgwg01": "64d07bb7f96b4376b2943c064ded797e",
              "usy-fbcore-messageregistryg01": "9d45f5d693554f09a9fb7f6adc47dfe5",
              "usy-fbcore-dataflowsg01": "f3a2754798434b68a6cf01df61817d4a",
              "usy-fbcore-processcontrolg01": "0bb07dbf21964e02bb49d119a840a8e1",
              "usy-fbcore-gridmodelmergingg01": "5133b9f9594e4cb5935979a8383adeb6",
              "usy-fbcore-raog01": "1714c9614524401b894fe93649514721",
              "usy-fbcore-archiveg01": "c0e250293d4348c5818458db780289c5",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "ELES Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-HOPS_WORKSPACE": {
            "appWorkspaces": [
              "HOPS_WORKSPACE"
            ],
            "code": "8feeda1e494d4f3f9b3cccb593547de3",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "f104e210f1384583a0d6b5bea1771b08",
              "usy-fbcore-dataflowgwg01": "831dbb8a88744d33824135e8bf4a2a36",
              "usy-fbcore-messageregistryg01": "7a9a037cf1354f908373a8cc3ee50b7d",
              "usy-fbcore-dataflowsg01": "50bf37a2976b4e35bf55b13f2ee40bc0",
              "usy-fbcore-processcontrolg01": "ce57f8e4dd6c4cd18016ff96641ab9a2",
              "usy-fbcore-gridmodelmergingg01": "8feeda1e494d4f3f9b3cccb593547de3",
              "usy-fbcore-raog01": "d0fdf2eb72474873a63fff64e4f44fe9",
              "usy-fbcore-archiveg01": "2a23221aeaf647398159f830c81b4f90",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "HOPS Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-PSE_WORKSPACE": {
            "appWorkspaces": [
              "PSE_WORKSPACE"
            ],
            "code": "45b52de311654b4aa92df13cf83502a6",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "5675e47462454388911271cc3e99d8cc",
              "usy-fbcore-dataflowgwg01": "31ab0bb70ac044acbd6de1e1e8a1a221",
              "usy-fbcore-messageregistryg01": "13959238ee654e4a8ab0f9e69507c63e",
              "usy-fbcore-dataflowsg01": "4cb1efc998714a069b80cb94fd6f4b1d",
              "usy-fbcore-processcontrolg01": "5e56678485b348daad9dfbbe4f4c3f6e",
              "usy-fbcore-gridmodelmergingg01": "45b52de311654b4aa92df13cf83502a6",
              "usy-fbcore-raog01": "3352d631f7a443f3af090daa71a60ab6",
              "usy-fbcore-archiveg01": "d3e4a94a0ddd46c88438cd2efc9b6869",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "PSE Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-SEPS_WORKSPACE": {
            "appWorkspaces": [
              "SEPS_WORKSPACE"
            ],
            "code": "d07af08d5ec747769eaaa904d78bf9ab",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "466b4fdbea9a413887671f6af12347d0",
              "usy-fbcore-dataflowgwg01": "db21aa8b76a545a991894a44f84d30e6",
              "usy-fbcore-messageregistryg01": "1e4a954b88fd467dacd4bc2eb7ff86c1",
              "usy-fbcore-dataflowsg01": "1ce63c9d348b4ba593c2f3ee1cac7692",
              "usy-fbcore-processcontrolg01": "2bb9bc62a5724f48bce9cd28a1ca7693",
              "usy-fbcore-gridmodelmergingg01": "d07af08d5ec747769eaaa904d78bf9ab",
              "usy-fbcore-raog01": "5feb82f8ce094652967ef11c834ac8f8",
              "usy-fbcore-archiveg01": "18da508bca2244518ac8f6d08674f667",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "SEPS Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TEL_WORKSPACE": {
            "appWorkspaces": [
              "TEL_WORKSPACE"
            ],
            "code": "f82c1c74f17641c9a661334ca6b3ee78",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "ecad48cf155a46df9d44020b44fb6610",
              "usy-fbcore-dataflowgwg01": "d9f30d9b16134e7f9881544ddbd4e3e1",
              "usy-fbcore-messageregistryg01": "eece30e39e1143819b8b19ff09aed079",
              "usy-fbcore-dataflowsg01": "299b166ec6a749fc97dffa7ab0d26dd3",
              "usy-fbcore-processcontrolg01": "9dd9be5caa3d4d38839719738ade3a6f",
              "usy-fbcore-gridmodelmergingg01": "f82c1c74f17641c9a661334ca6b3ee78",
              "usy-fbcore-raog01": "c1b10797ec2c4f1c87ece7629c604b28",
              "usy-fbcore-archiveg01": "c81806e27ffb4253bbd05ff5a9a33e67",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TEL Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-APG_WORKSPACE": {
            "appWorkspaces": [
              "APG_WORKSPACE"
            ],
            "code": "32b73f6ca365468c99a835274b89519a",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "da39fa50a4e9408aa2a5f6e7e10afde8",
              "usy-fbcore-dataflowgwg01": "f3d16fda85a647f295977e5cf8bd287d",
              "usy-fbcore-messageregistryg01": "d1e097a350ce402cb27d4a377e2d53c3",
              "usy-fbcore-dataflowsg01": "b232f2c4d7b94fab83cedf6d08d94f0c",
              "usy-fbcore-processcontrolg01": "a18282de978043f28ae3bc311251d19e",
              "usy-fbcore-gridmodelmergingg01": "32b73f6ca365468c99a835274b89519a",
              "usy-fbcore-raog01": "8925f7e4d5cb40eeb42c318e00af36f5",
              "usy-fbcore-archiveg01": "2dbcc97706f746df913518198e748131",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "APG Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-MAVIR_WORKSPACE": {
            "appWorkspaces": [
              "MAVIR_WORKSPACE"
            ],
            "code": "697d9e275c384c349353c05b8e260b5a",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "0c234d8e926841b589900c385f335d0d",
              "usy-fbcore-dataflowgwg01": "c7f0c56ab513465db583c4ff787e2bd5",
              "usy-fbcore-messageregistryg01": "fc5667671d214feba48c54135ab73f51",
              "usy-fbcore-dataflowsg01": "2d1fcd3bafb24abc8ac07b448668e030",
              "usy-fbcore-processcontrolg01": "fe18eb5fc98345ffbc9b3d538566cba9",
              "usy-fbcore-gridmodelmergingg01": "697d9e275c384c349353c05b8e260b5a",
              "usy-fbcore-raog01": "65a1418c03d6429bbdf064b909d45bf6",
              "usy-fbcore-archiveg01": "df32372809494683875fb63d2979df88",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "MAVIR Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-CORESO_WORKSPACE": {
            "appWorkspaces": [
              "CORESO_WORKSPACE"
            ],
            "code": "7955070286a14ef594338c97b7fc2fe3",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "6ce5041ae38b4edb8d45dce9fe4f4fce",
              "usy-fbcore-dataflowgwg01": "5a0930f3b88347c1b0a7f3c1feb46259",
              "usy-fbcore-messageregistryg01": "a89bfacc836348ef89dae8717addbb00",
              "usy-fbcore-dataflowsg01": "3901f2d2de8340b296de8697300dd627",
              "usy-fbcore-processcontrolg01": "e7e071870f0a4cb9ae1c9a97395098a3",
              "usy-fbcore-gridmodelmergingg01": "7955070286a14ef594338c97b7fc2fe3",
              "usy-fbcore-raog01": "185d14d0e8e3423baf9dd7a96e78c335",
              "usy-fbcore-archiveg01": "43ec6f2df5f34bb58ac4671dddfa92e6",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "CORESO Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TSCNET_WORKSPACE": {
            "appWorkspaces": [
              "TSCNET_WORKSPACE"
            ],
            "code": "f83899d4e4dd4343b1115bdbe336bfec",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "bad29a94cc8148429262adf5aacc1262",
              "usy-fbcore-dataflowgwg01": "204dc0b7d9904d85a551a38c0149c997",
              "usy-fbcore-messageregistryg01": "3d7ed4a358914fb9a7085fbb0ffc2dbb",
              "usy-fbcore-dataflowsg01": "a0d9739335534b05a39f99d96cfbdf20",
              "usy-fbcore-processcontrolg01": "15811e0370b048bd82e3213c18993104",
              "usy-fbcore-gridmodelmergingg01": "f83899d4e4dd4343b1115bdbe336bfec",
              "usy-fbcore-raog01": "3acc4e430995465282ed2816aba62677",
              "usy-fbcore-archiveg01": "dcac140905944e54a46a6ecd1e0d2630",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TSCNET Workspace ",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-UNICORN_WORKSPACE": {
            "appWorkspaces": [
              "UNICORN_WORKSPACE"
            ],
            "code": "c132558ee4bf4bddad88aa9b8a5476ac",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "cf57e31db5b84cd99edaec017d89f0c1",
              "usy-fbcore-dataflowgwg01": "a6209f7ec8fe4961862fec49a4d1bdc1",
              "usy-fbcore-messageregistryg01": "370bc28e2b674d7081ea9c839eb89a82",
              "usy-fbcore-dataflowsg01": "3a7c8987abfd4fcc88fb2ea3982e98e7",
              "usy-fbcore-processcontrolg01": "d4a30869edc642948814dd7733225fc2",
              "usy-fbcore-gridmodelmergingg01": "c132558ee4bf4bddad88aa9b8a5476ac",
              "usy-fbcore-raog01": "76640feac97a41be86feb7c3faba694e",
              "usy-fbcore-archiveg01": "f307b998707d444d8dfcbc691b39b890",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Unicorn Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-JAO_WORKSPACE": {
            "appWorkspaces": [
              "JAO_WORKSPACE"
            ],
            "code": "3dac2f4772ac3fe37cb83ce1478657c4",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "4f906639d6641c06eb440a2c8af7e25e",
              "usy-fbcore-dataflowgwg01": "1a3ce2ab40dc5dc805264463b3698cdc",
              "usy-fbcore-messageregistryg01": "7297ec08b2c689144d442136d62e1502",
              "usy-fbcore-dataflowsg01": "fcfd4bcc0cd46a8766d0cb55f0accaa8",
              "usy-fbcore-processcontrolg01": "1b1970da528e1b9155271eba4ffd9a36",
              "usy-fbcore-gridmodelmergingg01": "3dac2f4772ac3fe37cb83ce1478657c4",
              "usy-fbcore-raog01": "370118f1a8989305303b8c2b56fb5569",
              "usy-fbcore-archiveg01": "14ddfe80689767143b0492c8dd4bf9c6",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "JAO Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          }
        }
      },
      "usy-fbcore-raog01": {
        "workspaces": {
          "asid": {
            "appWorkspaces": [
              "asid"
            ],
            "code": "08bbd1c694e14eb09edc453fb31dc24b",
            "uid": "asidOwner"
          },
          "awid-DAILY_PROCESS": {
            "appWorkspaces": [
              "DAILY_PROCESS"
            ],
            "code": "78047ff8a8bc4bf09be12b7161e40542",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "2ca0ddf56fb14d3d98ac6ebadb2ac764",
              "usy-fbcore-dataflowgwg01": "fef9a1de0a4145aa80dc8dfb44f15db0",
              "usy-fbcore-messageregistryg01": "4a573f76fcea479f9d594de8c1077030",
              "usy-fbcore-dataflowsg01": "8e0ffebb60fb4e4780a0a30085516516",
              "usy-fbcore-processcontrolg01": "8a677e71453f4874b9f5e59bf01b3cc2",
              "usy-fbcore-gridmodelmergingg01": "833de08b97a447a681867b0077f4a4d2",
              "usy-fbcore-raog01": "78047ff8a8bc4bf09be12b7161e40542",
              "usy-fbcore-archiveg01": "53e1c5bd98dd467eaa1be30f1db0e30b",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Daily Process",
                "theme": "default",
                "priority": "1"
              }
            }
          },
          "awid-AMP_WORKSPACE": {
            "appWorkspaces": [
              "AMP_WORKSPACE"
            ],
            "code": "b9897dc907154578b4f56063abaced4e",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "454f7d2e137440f4a771fd63725117b8",
              "usy-fbcore-dataflowgwg01": "37d0ebc680484bc88aa86a63a7d0da37",
              "usy-fbcore-messageregistryg01": "001209568f764136aab717a6b6815e5e",
              "usy-fbcore-dataflowsg01": "51ffbd22625c4662ae5dad631ae875e7",
              "usy-fbcore-processcontrolg01": "9bac7812bd844d9ba04ecb60a22a9771",
              "usy-fbcore-gridmodelmergingg01": "a65ab9486e5b4a4d927a73c60e12ebeb",
              "usy-fbcore-raog01": "b9897dc907154578b4f56063abaced4e",
              "usy-fbcore-archiveg01": "f5ce073c1e184e17b1fb76c83faf33d1",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "AMP Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TTG_WORKSPACE": {
            "appWorkspaces": [
              "TTG_WORKSPACE"
            ],
            "code": "49e7487ee05348f283a196d2bf6c928c",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "a0f4bdcbcbe9496dbf52ab6122a59f87",
              "usy-fbcore-dataflowgwg01": "e487be20959f463f8e4c3092c868b90b",
              "usy-fbcore-messageregistryg01": "2a47d97e28a4499c8563ce9bdfb68aeb",
              "usy-fbcore-dataflowsg01": "65439894a6b346c7b6ade80bb5039ec3",
              "usy-fbcore-processcontrolg01": "889f5692644045f5a5e3c527de65258e",
              "usy-fbcore-gridmodelmergingg01": "d42da9665ab7400fa1d050daade497ef",
              "usy-fbcore-raog01": "49e7487ee05348f283a196d2bf6c928c",
              "usy-fbcore-archiveg01": "e2323c34a2fd4eddb71dd2c4fddb592a",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TTG Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TNG_WORKSPACE": {
            "appWorkspaces": [
              "TNG_WORKSPACE"
            ],
            "code": "2347985cc2634f269e470ef64227a187",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "3212f51a06424138a0f132ee72f51b04",
              "usy-fbcore-dataflowgwg01": "e90d136bfec945f985f0f7f9ff0aeed3",
              "usy-fbcore-messageregistryg01": "d30d37fd075e4c90a28aac747e3211f4",
              "usy-fbcore-dataflowsg01": "295b6b628d944c6aa09e6fd0a504a6ff",
              "usy-fbcore-processcontrolg01": "d8306fed32f444a790a03be7cb179701",
              "usy-fbcore-gridmodelmergingg01": "d80de50ca4dd4aca906400c05072f448",
              "usy-fbcore-raog01": "2347985cc2634f269e470ef64227a187",
              "usy-fbcore-archiveg01": "900e93c9cd774e5f99efca6c7cca7168",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TNG Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-50HZ_WORKSPACE": {
            "appWorkspaces": [
              "50HZ_WORKSPACE"
            ],
            "code": "1348a406c20a4542afea37e72c3dbd03",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "10dff0c3460b4a36b716920a89d8e171",
              "usy-fbcore-dataflowgwg01": "81d6033f551d4d0aa9adc4675a1c1a8d",
              "usy-fbcore-messageregistryg01": "dd7644cc8d5a4e4194d37decdf12b030",
              "usy-fbcore-dataflowsg01": "15419f7958a84071ab705b4000d7a189",
              "usy-fbcore-processcontrolg01": "dcf94a60737140dab61dd932471736bc",
              "usy-fbcore-gridmodelmergingg01": "47ec7c95a8314a5c854025184ef00ae9",
              "usy-fbcore-raog01": "1348a406c20a4542afea37e72c3dbd03",
              "usy-fbcore-archiveg01": "788d9f0f0be145a3bb22713c8724f16a",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "50Hz Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-ELIA_WORKSPACE": {
            "appWorkspaces": [
              "ELIA_WORKSPACE"
            ],
            "code": "3481e312798e4c27a2ec38f3185115a6",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "c741e3a44d824c6a978cb83ea60066b4",
              "usy-fbcore-dataflowgwg01": "9ce5f23b45ba44069b1efd0de2503011",
              "usy-fbcore-messageregistryg01": "cf79830795224548a0ce3e9daf57cb86",
              "usy-fbcore-dataflowsg01": "52bf2b6889f44f658b2f21538f30d9b8",
              "usy-fbcore-processcontrolg01": "b321551e1b8f4ee78eca6b1bc12044e1",
              "usy-fbcore-gridmodelmergingg01": "a687c53c3c1e4df4871df5a7afb7f7f7",
              "usy-fbcore-raog01": "3481e312798e4c27a2ec38f3185115a6",
              "usy-fbcore-archiveg01": "9391057227724d488b765d58de2d00c5",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Elia Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-RTE_WORKSPACE": {
            "appWorkspaces": [
              "RTE_WORKSPACE"
            ],
            "code": "93193a6959bf444e9f5f007a6f05d0a2",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "4f032ebb5d7644c4a8482b3cab0c8d95",
              "usy-fbcore-dataflowgwg01": "742a1832e960414daf670d0bb867a99c",
              "usy-fbcore-messageregistryg01": "db70e9acdeaa492ca1256a8983c2f367",
              "usy-fbcore-dataflowsg01": "45a9984723f74e9a8939a859dde4871a",
              "usy-fbcore-processcontrolg01": "c58f4e34f1744656858ee54628df61cb",
              "usy-fbcore-gridmodelmergingg01": "24d977ba941c42088a72ecd33a083c26",
              "usy-fbcore-raog01": "93193a6959bf444e9f5f007a6f05d0a2",
              "usy-fbcore-archiveg01": "0f2146f868ab453185d220a2c2b0d3c9",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "RTE Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TTN_WORKSPACE": {
            "appWorkspaces": [
              "TTN_WORKSPACE"
            ],
            "code": "f233b7989eb24a888af721fb6afdbb85",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "8227c48bd46f4e18ba8a90876adf552f",
              "usy-fbcore-dataflowgwg01": "4e926830823f48459610b05eff8c78f2",
              "usy-fbcore-messageregistryg01": "baf8835d6b1843e080760911f2e6e9d5",
              "usy-fbcore-dataflowsg01": "53f21dd0a67944caafe4a8e8da4e534e",
              "usy-fbcore-processcontrolg01": "03d400034f124e63a81877f836643cd2",
              "usy-fbcore-gridmodelmergingg01": "8e52cebdb45a4534a3af37977e216347",
              "usy-fbcore-raog01": "f233b7989eb24a888af721fb6afdbb85",
              "usy-fbcore-archiveg01": "2a607e42aa6248f3b81e3c25cce05c55",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TTN Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-CEPS_WORKSPACE": {
            "appWorkspaces": [
              "CEPS_WORKSPACE"
            ],
            "code": "c03dde09c00e4de99a57824d189a8a30",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "8be37fcccc5b481e8f41cd7258ef9b61",
              "usy-fbcore-dataflowgwg01": "de05153ea1f1416f9834711185298316",
              "usy-fbcore-messageregistryg01": "8b4c05e9591d47d89d1ea8f2a3b339f6",
              "usy-fbcore-dataflowsg01": "94bb7586474f42779c30f3f6d96d1a56",
              "usy-fbcore-processcontrolg01": "b25bc0fda68a4a06b64059d401035879",
              "usy-fbcore-gridmodelmergingg01": "14b54040569544fb8d86efdad72f5cd6",
              "usy-fbcore-raog01": "c03dde09c00e4de99a57824d189a8a30",
              "usy-fbcore-archiveg01": "50b6908c9c77415699ce62ed3cab9597",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "CEPS Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-ELES_WORKSPACE": {
            "appWorkspaces": [
              "ELES_WORKSPACE"
            ],
            "code": "1714c9614524401b894fe93649514721",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "a5904dae664648669822c01609436dc3",
              "usy-fbcore-dataflowgwg01": "64d07bb7f96b4376b2943c064ded797e",
              "usy-fbcore-messageregistryg01": "9d45f5d693554f09a9fb7f6adc47dfe5",
              "usy-fbcore-dataflowsg01": "f3a2754798434b68a6cf01df61817d4a",
              "usy-fbcore-processcontrolg01": "0bb07dbf21964e02bb49d119a840a8e1",
              "usy-fbcore-gridmodelmergingg01": "5133b9f9594e4cb5935979a8383adeb6",
              "usy-fbcore-raog01": "1714c9614524401b894fe93649514721",
              "usy-fbcore-archiveg01": "c0e250293d4348c5818458db780289c5",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "ELES Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-HOPS_WORKSPACE": {
            "appWorkspaces": [
              "HOPS_WORKSPACE"
            ],
            "code": "d0fdf2eb72474873a63fff64e4f44fe9",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "f104e210f1384583a0d6b5bea1771b08",
              "usy-fbcore-dataflowgwg01": "831dbb8a88744d33824135e8bf4a2a36",
              "usy-fbcore-messageregistryg01": "7a9a037cf1354f908373a8cc3ee50b7d",
              "usy-fbcore-dataflowsg01": "50bf37a2976b4e35bf55b13f2ee40bc0",
              "usy-fbcore-processcontrolg01": "ce57f8e4dd6c4cd18016ff96641ab9a2",
              "usy-fbcore-gridmodelmergingg01": "8feeda1e494d4f3f9b3cccb593547de3",
              "usy-fbcore-raog01": "d0fdf2eb72474873a63fff64e4f44fe9",
              "usy-fbcore-archiveg01": "2a23221aeaf647398159f830c81b4f90",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "HOPS Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-PSE_WORKSPACE": {
            "appWorkspaces": [
              "PSE_WORKSPACE"
            ],
            "code": "3352d631f7a443f3af090daa71a60ab6",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "5675e47462454388911271cc3e99d8cc",
              "usy-fbcore-dataflowgwg01": "31ab0bb70ac044acbd6de1e1e8a1a221",
              "usy-fbcore-messageregistryg01": "13959238ee654e4a8ab0f9e69507c63e",
              "usy-fbcore-dataflowsg01": "4cb1efc998714a069b80cb94fd6f4b1d",
              "usy-fbcore-processcontrolg01": "5e56678485b348daad9dfbbe4f4c3f6e",
              "usy-fbcore-gridmodelmergingg01": "45b52de311654b4aa92df13cf83502a6",
              "usy-fbcore-raog01": "3352d631f7a443f3af090daa71a60ab6",
              "usy-fbcore-archiveg01": "d3e4a94a0ddd46c88438cd2efc9b6869",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "PSE Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-SEPS_WORKSPACE": {
            "appWorkspaces": [
              "SEPS_WORKSPACE"
            ],
            "code": "5feb82f8ce094652967ef11c834ac8f8",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "466b4fdbea9a413887671f6af12347d0",
              "usy-fbcore-dataflowgwg01": "db21aa8b76a545a991894a44f84d30e6",
              "usy-fbcore-messageregistryg01": "1e4a954b88fd467dacd4bc2eb7ff86c1",
              "usy-fbcore-dataflowsg01": "1ce63c9d348b4ba593c2f3ee1cac7692",
              "usy-fbcore-processcontrolg01": "2bb9bc62a5724f48bce9cd28a1ca7693",
              "usy-fbcore-gridmodelmergingg01": "d07af08d5ec747769eaaa904d78bf9ab",
              "usy-fbcore-raog01": "5feb82f8ce094652967ef11c834ac8f8",
              "usy-fbcore-archiveg01": "18da508bca2244518ac8f6d08674f667",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "SEPS Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TEL_WORKSPACE": {
            "appWorkspaces": [
              "TEL_WORKSPACE"
            ],
            "code": "c1b10797ec2c4f1c87ece7629c604b28",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "ecad48cf155a46df9d44020b44fb6610",
              "usy-fbcore-dataflowgwg01": "d9f30d9b16134e7f9881544ddbd4e3e1",
              "usy-fbcore-messageregistryg01": "eece30e39e1143819b8b19ff09aed079",
              "usy-fbcore-dataflowsg01": "299b166ec6a749fc97dffa7ab0d26dd3",
              "usy-fbcore-processcontrolg01": "9dd9be5caa3d4d38839719738ade3a6f",
              "usy-fbcore-gridmodelmergingg01": "f82c1c74f17641c9a661334ca6b3ee78",
              "usy-fbcore-raog01": "c1b10797ec2c4f1c87ece7629c604b28",
              "usy-fbcore-archiveg01": "c81806e27ffb4253bbd05ff5a9a33e67",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TEL Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-APG_WORKSPACE": {
            "appWorkspaces": [
              "APG_WORKSPACE"
            ],
            "code": "8925f7e4d5cb40eeb42c318e00af36f5",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "da39fa50a4e9408aa2a5f6e7e10afde8",
              "usy-fbcore-dataflowgwg01": "f3d16fda85a647f295977e5cf8bd287d",
              "usy-fbcore-messageregistryg01": "d1e097a350ce402cb27d4a377e2d53c3",
              "usy-fbcore-dataflowsg01": "b232f2c4d7b94fab83cedf6d08d94f0c",
              "usy-fbcore-processcontrolg01": "a18282de978043f28ae3bc311251d19e",
              "usy-fbcore-gridmodelmergingg01": "32b73f6ca365468c99a835274b89519a",
              "usy-fbcore-raog01": "8925f7e4d5cb40eeb42c318e00af36f5",
              "usy-fbcore-archiveg01": "2dbcc97706f746df913518198e748131",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "APG Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-MAVIR_WORKSPACE": {
            "appWorkspaces": [
              "MAVIR_WORKSPACE"
            ],
            "code": "65a1418c03d6429bbdf064b909d45bf6",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "0c234d8e926841b589900c385f335d0d",
              "usy-fbcore-dataflowgwg01": "c7f0c56ab513465db583c4ff787e2bd5",
              "usy-fbcore-messageregistryg01": "fc5667671d214feba48c54135ab73f51",
              "usy-fbcore-dataflowsg01": "2d1fcd3bafb24abc8ac07b448668e030",
              "usy-fbcore-processcontrolg01": "fe18eb5fc98345ffbc9b3d538566cba9",
              "usy-fbcore-gridmodelmergingg01": "697d9e275c384c349353c05b8e260b5a",
              "usy-fbcore-raog01": "65a1418c03d6429bbdf064b909d45bf6",
              "usy-fbcore-archiveg01": "df32372809494683875fb63d2979df88",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "MAVIR Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-CORESO_WORKSPACE": {
            "appWorkspaces": [
              "CORESO_WORKSPACE"
            ],
            "code": "185d14d0e8e3423baf9dd7a96e78c335",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "6ce5041ae38b4edb8d45dce9fe4f4fce",
              "usy-fbcore-dataflowgwg01": "5a0930f3b88347c1b0a7f3c1feb46259",
              "usy-fbcore-messageregistryg01": "a89bfacc836348ef89dae8717addbb00",
              "usy-fbcore-dataflowsg01": "3901f2d2de8340b296de8697300dd627",
              "usy-fbcore-processcontrolg01": "e7e071870f0a4cb9ae1c9a97395098a3",
              "usy-fbcore-gridmodelmergingg01": "7955070286a14ef594338c97b7fc2fe3",
              "usy-fbcore-raog01": "185d14d0e8e3423baf9dd7a96e78c335",
              "usy-fbcore-archiveg01": "43ec6f2df5f34bb58ac4671dddfa92e6",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "CORESO Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TSCNET_WORKSPACE": {
            "appWorkspaces": [
              "TSCNET_WORKSPACE"
            ],
            "code": "3acc4e430995465282ed2816aba62677",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "bad29a94cc8148429262adf5aacc1262",
              "usy-fbcore-dataflowgwg01": "204dc0b7d9904d85a551a38c0149c997",
              "usy-fbcore-messageregistryg01": "3d7ed4a358914fb9a7085fbb0ffc2dbb",
              "usy-fbcore-dataflowsg01": "a0d9739335534b05a39f99d96cfbdf20",
              "usy-fbcore-processcontrolg01": "15811e0370b048bd82e3213c18993104",
              "usy-fbcore-gridmodelmergingg01": "f83899d4e4dd4343b1115bdbe336bfec",
              "usy-fbcore-raog01": "3acc4e430995465282ed2816aba62677",
              "usy-fbcore-archiveg01": "dcac140905944e54a46a6ecd1e0d2630",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TSCNET Workspace ",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-UNICORN_WORKSPACE": {
            "appWorkspaces": [
              "UNICORN_WORKSPACE"
            ],
            "code": "76640feac97a41be86feb7c3faba694e",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "cf57e31db5b84cd99edaec017d89f0c1",
              "usy-fbcore-dataflowgwg01": "a6209f7ec8fe4961862fec49a4d1bdc1",
              "usy-fbcore-messageregistryg01": "370bc28e2b674d7081ea9c839eb89a82",
              "usy-fbcore-dataflowsg01": "3a7c8987abfd4fcc88fb2ea3982e98e7",
              "usy-fbcore-processcontrolg01": "d4a30869edc642948814dd7733225fc2",
              "usy-fbcore-gridmodelmergingg01": "c132558ee4bf4bddad88aa9b8a5476ac",
              "usy-fbcore-raog01": "76640feac97a41be86feb7c3faba694e",
              "usy-fbcore-archiveg01": "f307b998707d444d8dfcbc691b39b890",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Unicorn Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-JAO_WORKSPACE": {
            "appWorkspaces": [
              "JAO_WORKSPACE"
            ],
            "code": "370118f1a8989305303b8c2b56fb5569",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "4f906639d6641c06eb440a2c8af7e25e",
              "usy-fbcore-dataflowgwg01": "1a3ce2ab40dc5dc805264463b3698cdc",
              "usy-fbcore-messageregistryg01": "7297ec08b2c689144d442136d62e1502",
              "usy-fbcore-dataflowsg01": "fcfd4bcc0cd46a8766d0cb55f0accaa8",
              "usy-fbcore-processcontrolg01": "1b1970da528e1b9155271eba4ffd9a36",
              "usy-fbcore-gridmodelmergingg01": "3dac2f4772ac3fe37cb83ce1478657c4",
              "usy-fbcore-raog01": "370118f1a8989305303b8c2b56fb5569",
              "usy-fbcore-archiveg01": "14ddfe80689767143b0492c8dd4bf9c6",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "JAO Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          }
        }
      },
      "usy-fbcore-archiveg01": {
        "workspaces": {
          "asid": {
            "appWorkspaces": [
              "asid"
            ],
            "code": "8d97e24c47154c2d876ae838df23e2ac",
            "uid": "asidOwner"
          },
          "awid-DAILY_PROCESS": {
            "appWorkspaces": [
              "DAILY_PROCESS"
            ],
            "code": "53e1c5bd98dd467eaa1be30f1db0e30b",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "2ca0ddf56fb14d3d98ac6ebadb2ac764",
              "usy-fbcore-dataflowgwg01": "fef9a1de0a4145aa80dc8dfb44f15db0",
              "usy-fbcore-messageregistryg01": "4a573f76fcea479f9d594de8c1077030",
              "usy-fbcore-dataflowsg01": "8e0ffebb60fb4e4780a0a30085516516",
              "usy-fbcore-processcontrolg01": "8a677e71453f4874b9f5e59bf01b3cc2",
              "usy-fbcore-gridmodelmergingg01": "833de08b97a447a681867b0077f4a4d2",
              "usy-fbcore-raog01": "78047ff8a8bc4bf09be12b7161e40542",
              "usy-fbcore-archiveg01": "53e1c5bd98dd467eaa1be30f1db0e30b",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Daily Process",
                "theme": "default",
                "priority": "1"
              }
            }
          },
          "awid-AMP_WORKSPACE": {
            "appWorkspaces": [
              "AMP_WORKSPACE"
            ],
            "code": "f5ce073c1e184e17b1fb76c83faf33d1",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "454f7d2e137440f4a771fd63725117b8",
              "usy-fbcore-dataflowgwg01": "37d0ebc680484bc88aa86a63a7d0da37",
              "usy-fbcore-messageregistryg01": "001209568f764136aab717a6b6815e5e",
              "usy-fbcore-dataflowsg01": "51ffbd22625c4662ae5dad631ae875e7",
              "usy-fbcore-processcontrolg01": "9bac7812bd844d9ba04ecb60a22a9771",
              "usy-fbcore-gridmodelmergingg01": "a65ab9486e5b4a4d927a73c60e12ebeb",
              "usy-fbcore-raog01": "b9897dc907154578b4f56063abaced4e",
              "usy-fbcore-archiveg01": "f5ce073c1e184e17b1fb76c83faf33d1",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "AMP Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TTG_WORKSPACE": {
            "appWorkspaces": [
              "TTG_WORKSPACE"
            ],
            "code": "e2323c34a2fd4eddb71dd2c4fddb592a",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "a0f4bdcbcbe9496dbf52ab6122a59f87",
              "usy-fbcore-dataflowgwg01": "e487be20959f463f8e4c3092c868b90b",
              "usy-fbcore-messageregistryg01": "2a47d97e28a4499c8563ce9bdfb68aeb",
              "usy-fbcore-dataflowsg01": "65439894a6b346c7b6ade80bb5039ec3",
              "usy-fbcore-processcontrolg01": "889f5692644045f5a5e3c527de65258e",
              "usy-fbcore-gridmodelmergingg01": "d42da9665ab7400fa1d050daade497ef",
              "usy-fbcore-raog01": "49e7487ee05348f283a196d2bf6c928c",
              "usy-fbcore-archiveg01": "e2323c34a2fd4eddb71dd2c4fddb592a",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TTG Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TNG_WORKSPACE": {
            "appWorkspaces": [
              "TNG_WORKSPACE"
            ],
            "code": "900e93c9cd774e5f99efca6c7cca7168",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "3212f51a06424138a0f132ee72f51b04",
              "usy-fbcore-dataflowgwg01": "e90d136bfec945f985f0f7f9ff0aeed3",
              "usy-fbcore-messageregistryg01": "d30d37fd075e4c90a28aac747e3211f4",
              "usy-fbcore-dataflowsg01": "295b6b628d944c6aa09e6fd0a504a6ff",
              "usy-fbcore-processcontrolg01": "d8306fed32f444a790a03be7cb179701",
              "usy-fbcore-gridmodelmergingg01": "d80de50ca4dd4aca906400c05072f448",
              "usy-fbcore-raog01": "2347985cc2634f269e470ef64227a187",
              "usy-fbcore-archiveg01": "900e93c9cd774e5f99efca6c7cca7168",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TNG Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-50HZ_WORKSPACE": {
            "appWorkspaces": [
              "50HZ_WORKSPACE"
            ],
            "code": "788d9f0f0be145a3bb22713c8724f16a",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "10dff0c3460b4a36b716920a89d8e171",
              "usy-fbcore-dataflowgwg01": "81d6033f551d4d0aa9adc4675a1c1a8d",
              "usy-fbcore-messageregistryg01": "dd7644cc8d5a4e4194d37decdf12b030",
              "usy-fbcore-dataflowsg01": "15419f7958a84071ab705b4000d7a189",
              "usy-fbcore-processcontrolg01": "dcf94a60737140dab61dd932471736bc",
              "usy-fbcore-gridmodelmergingg01": "47ec7c95a8314a5c854025184ef00ae9",
              "usy-fbcore-raog01": "1348a406c20a4542afea37e72c3dbd03",
              "usy-fbcore-archiveg01": "788d9f0f0be145a3bb22713c8724f16a",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "50Hz Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-ELIA_WORKSPACE": {
            "appWorkspaces": [
              "ELIA_WORKSPACE"
            ],
            "code": "9391057227724d488b765d58de2d00c5",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "c741e3a44d824c6a978cb83ea60066b4",
              "usy-fbcore-dataflowgwg01": "9ce5f23b45ba44069b1efd0de2503011",
              "usy-fbcore-messageregistryg01": "cf79830795224548a0ce3e9daf57cb86",
              "usy-fbcore-dataflowsg01": "52bf2b6889f44f658b2f21538f30d9b8",
              "usy-fbcore-processcontrolg01": "b321551e1b8f4ee78eca6b1bc12044e1",
              "usy-fbcore-gridmodelmergingg01": "a687c53c3c1e4df4871df5a7afb7f7f7",
              "usy-fbcore-raog01": "3481e312798e4c27a2ec38f3185115a6",
              "usy-fbcore-archiveg01": "9391057227724d488b765d58de2d00c5",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Elia Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-RTE_WORKSPACE": {
            "appWorkspaces": [
              "RTE_WORKSPACE"
            ],
            "code": "0f2146f868ab453185d220a2c2b0d3c9",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "4f032ebb5d7644c4a8482b3cab0c8d95",
              "usy-fbcore-dataflowgwg01": "742a1832e960414daf670d0bb867a99c",
              "usy-fbcore-messageregistryg01": "db70e9acdeaa492ca1256a8983c2f367",
              "usy-fbcore-dataflowsg01": "45a9984723f74e9a8939a859dde4871a",
              "usy-fbcore-processcontrolg01": "c58f4e34f1744656858ee54628df61cb",
              "usy-fbcore-gridmodelmergingg01": "24d977ba941c42088a72ecd33a083c26",
              "usy-fbcore-raog01": "93193a6959bf444e9f5f007a6f05d0a2",
              "usy-fbcore-archiveg01": "0f2146f868ab453185d220a2c2b0d3c9",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "RTE Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TTN_WORKSPACE": {
            "appWorkspaces": [
              "TTN_WORKSPACE"
            ],
            "code": "2a607e42aa6248f3b81e3c25cce05c55",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "8227c48bd46f4e18ba8a90876adf552f",
              "usy-fbcore-dataflowgwg01": "4e926830823f48459610b05eff8c78f2",
              "usy-fbcore-messageregistryg01": "baf8835d6b1843e080760911f2e6e9d5",
              "usy-fbcore-dataflowsg01": "53f21dd0a67944caafe4a8e8da4e534e",
              "usy-fbcore-processcontrolg01": "03d400034f124e63a81877f836643cd2",
              "usy-fbcore-gridmodelmergingg01": "8e52cebdb45a4534a3af37977e216347",
              "usy-fbcore-raog01": "f233b7989eb24a888af721fb6afdbb85",
              "usy-fbcore-archiveg01": "2a607e42aa6248f3b81e3c25cce05c55",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TTN Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-CEPS_WORKSPACE": {
            "appWorkspaces": [
              "CEPS_WORKSPACE"
            ],
            "code": "50b6908c9c77415699ce62ed3cab9597",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "8be37fcccc5b481e8f41cd7258ef9b61",
              "usy-fbcore-dataflowgwg01": "de05153ea1f1416f9834711185298316",
              "usy-fbcore-messageregistryg01": "8b4c05e9591d47d89d1ea8f2a3b339f6",
              "usy-fbcore-dataflowsg01": "94bb7586474f42779c30f3f6d96d1a56",
              "usy-fbcore-processcontrolg01": "b25bc0fda68a4a06b64059d401035879",
              "usy-fbcore-gridmodelmergingg01": "14b54040569544fb8d86efdad72f5cd6",
              "usy-fbcore-raog01": "c03dde09c00e4de99a57824d189a8a30",
              "usy-fbcore-archiveg01": "50b6908c9c77415699ce62ed3cab9597",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "CEPS Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-ELES_WORKSPACE": {
            "appWorkspaces": [
              "ELES_WORKSPACE"
            ],
            "code": "c0e250293d4348c5818458db780289c5",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "a5904dae664648669822c01609436dc3",
              "usy-fbcore-dataflowgwg01": "64d07bb7f96b4376b2943c064ded797e",
              "usy-fbcore-messageregistryg01": "9d45f5d693554f09a9fb7f6adc47dfe5",
              "usy-fbcore-dataflowsg01": "f3a2754798434b68a6cf01df61817d4a",
              "usy-fbcore-processcontrolg01": "0bb07dbf21964e02bb49d119a840a8e1",
              "usy-fbcore-gridmodelmergingg01": "5133b9f9594e4cb5935979a8383adeb6",
              "usy-fbcore-raog01": "1714c9614524401b894fe93649514721",
              "usy-fbcore-archiveg01": "c0e250293d4348c5818458db780289c5",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "ELES Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-HOPS_WORKSPACE": {
            "appWorkspaces": [
              "HOPS_WORKSPACE"
            ],
            "code": "2a23221aeaf647398159f830c81b4f90",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "f104e210f1384583a0d6b5bea1771b08",
              "usy-fbcore-dataflowgwg01": "831dbb8a88744d33824135e8bf4a2a36",
              "usy-fbcore-messageregistryg01": "7a9a037cf1354f908373a8cc3ee50b7d",
              "usy-fbcore-dataflowsg01": "50bf37a2976b4e35bf55b13f2ee40bc0",
              "usy-fbcore-processcontrolg01": "ce57f8e4dd6c4cd18016ff96641ab9a2",
              "usy-fbcore-gridmodelmergingg01": "8feeda1e494d4f3f9b3cccb593547de3",
              "usy-fbcore-raog01": "d0fdf2eb72474873a63fff64e4f44fe9",
              "usy-fbcore-archiveg01": "2a23221aeaf647398159f830c81b4f90",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "HOPS Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-PSE_WORKSPACE": {
            "appWorkspaces": [
              "PSE_WORKSPACE"
            ],
            "code": "d3e4a94a0ddd46c88438cd2efc9b6869",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "5675e47462454388911271cc3e99d8cc",
              "usy-fbcore-dataflowgwg01": "31ab0bb70ac044acbd6de1e1e8a1a221",
              "usy-fbcore-messageregistryg01": "13959238ee654e4a8ab0f9e69507c63e",
              "usy-fbcore-dataflowsg01": "4cb1efc998714a069b80cb94fd6f4b1d",
              "usy-fbcore-processcontrolg01": "5e56678485b348daad9dfbbe4f4c3f6e",
              "usy-fbcore-gridmodelmergingg01": "45b52de311654b4aa92df13cf83502a6",
              "usy-fbcore-raog01": "3352d631f7a443f3af090daa71a60ab6",
              "usy-fbcore-archiveg01": "d3e4a94a0ddd46c88438cd2efc9b6869",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "PSE Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-SEPS_WORKSPACE": {
            "appWorkspaces": [
              "SEPS_WORKSPACE"
            ],
            "code": "18da508bca2244518ac8f6d08674f667",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "466b4fdbea9a413887671f6af12347d0",
              "usy-fbcore-dataflowgwg01": "db21aa8b76a545a991894a44f84d30e6",
              "usy-fbcore-messageregistryg01": "1e4a954b88fd467dacd4bc2eb7ff86c1",
              "usy-fbcore-dataflowsg01": "1ce63c9d348b4ba593c2f3ee1cac7692",
              "usy-fbcore-processcontrolg01": "2bb9bc62a5724f48bce9cd28a1ca7693",
              "usy-fbcore-gridmodelmergingg01": "d07af08d5ec747769eaaa904d78bf9ab",
              "usy-fbcore-raog01": "5feb82f8ce094652967ef11c834ac8f8",
              "usy-fbcore-archiveg01": "18da508bca2244518ac8f6d08674f667",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "SEPS Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TEL_WORKSPACE": {
            "appWorkspaces": [
              "TEL_WORKSPACE"
            ],
            "code": "c81806e27ffb4253bbd05ff5a9a33e67",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "ecad48cf155a46df9d44020b44fb6610",
              "usy-fbcore-dataflowgwg01": "d9f30d9b16134e7f9881544ddbd4e3e1",
              "usy-fbcore-messageregistryg01": "eece30e39e1143819b8b19ff09aed079",
              "usy-fbcore-dataflowsg01": "299b166ec6a749fc97dffa7ab0d26dd3",
              "usy-fbcore-processcontrolg01": "9dd9be5caa3d4d38839719738ade3a6f",
              "usy-fbcore-gridmodelmergingg01": "f82c1c74f17641c9a661334ca6b3ee78",
              "usy-fbcore-raog01": "c1b10797ec2c4f1c87ece7629c604b28",
              "usy-fbcore-archiveg01": "c81806e27ffb4253bbd05ff5a9a33e67",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TEL Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-APG_WORKSPACE": {
            "appWorkspaces": [
              "APG_WORKSPACE"
            ],
            "code": "2dbcc97706f746df913518198e748131",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "da39fa50a4e9408aa2a5f6e7e10afde8",
              "usy-fbcore-dataflowgwg01": "f3d16fda85a647f295977e5cf8bd287d",
              "usy-fbcore-messageregistryg01": "d1e097a350ce402cb27d4a377e2d53c3",
              "usy-fbcore-dataflowsg01": "b232f2c4d7b94fab83cedf6d08d94f0c",
              "usy-fbcore-processcontrolg01": "a18282de978043f28ae3bc311251d19e",
              "usy-fbcore-gridmodelmergingg01": "32b73f6ca365468c99a835274b89519a",
              "usy-fbcore-raog01": "8925f7e4d5cb40eeb42c318e00af36f5",
              "usy-fbcore-archiveg01": "2dbcc97706f746df913518198e748131",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "APG Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-MAVIR_WORKSPACE": {
            "appWorkspaces": [
              "MAVIR_WORKSPACE"
            ],
            "code": "df32372809494683875fb63d2979df88",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "0c234d8e926841b589900c385f335d0d",
              "usy-fbcore-dataflowgwg01": "c7f0c56ab513465db583c4ff787e2bd5",
              "usy-fbcore-messageregistryg01": "fc5667671d214feba48c54135ab73f51",
              "usy-fbcore-dataflowsg01": "2d1fcd3bafb24abc8ac07b448668e030",
              "usy-fbcore-processcontrolg01": "fe18eb5fc98345ffbc9b3d538566cba9",
              "usy-fbcore-gridmodelmergingg01": "697d9e275c384c349353c05b8e260b5a",
              "usy-fbcore-raog01": "65a1418c03d6429bbdf064b909d45bf6",
              "usy-fbcore-archiveg01": "df32372809494683875fb63d2979df88",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "MAVIR Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-CORESO_WORKSPACE": {
            "appWorkspaces": [
              "CORESO_WORKSPACE"
            ],
            "code": "43ec6f2df5f34bb58ac4671dddfa92e6",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "6ce5041ae38b4edb8d45dce9fe4f4fce",
              "usy-fbcore-dataflowgwg01": "5a0930f3b88347c1b0a7f3c1feb46259",
              "usy-fbcore-messageregistryg01": "a89bfacc836348ef89dae8717addbb00",
              "usy-fbcore-dataflowsg01": "3901f2d2de8340b296de8697300dd627",
              "usy-fbcore-processcontrolg01": "e7e071870f0a4cb9ae1c9a97395098a3",
              "usy-fbcore-gridmodelmergingg01": "7955070286a14ef594338c97b7fc2fe3",
              "usy-fbcore-raog01": "185d14d0e8e3423baf9dd7a96e78c335",
              "usy-fbcore-archiveg01": "43ec6f2df5f34bb58ac4671dddfa92e6",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "CORESO Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-TSCNET_WORKSPACE": {
            "appWorkspaces": [
              "TSCNET_WORKSPACE"
            ],
            "code": "dcac140905944e54a46a6ecd1e0d2630",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "bad29a94cc8148429262adf5aacc1262",
              "usy-fbcore-dataflowgwg01": "204dc0b7d9904d85a551a38c0149c997",
              "usy-fbcore-messageregistryg01": "3d7ed4a358914fb9a7085fbb0ffc2dbb",
              "usy-fbcore-dataflowsg01": "a0d9739335534b05a39f99d96cfbdf20",
              "usy-fbcore-processcontrolg01": "15811e0370b048bd82e3213c18993104",
              "usy-fbcore-gridmodelmergingg01": "f83899d4e4dd4343b1115bdbe336bfec",
              "usy-fbcore-raog01": "3acc4e430995465282ed2816aba62677",
              "usy-fbcore-archiveg01": "dcac140905944e54a46a6ecd1e0d2630",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "TSCNET Workspace ",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-UNICORN_WORKSPACE": {
            "appWorkspaces": [
              "UNICORN_WORKSPACE"
            ],
            "code": "f307b998707d444d8dfcbc691b39b890",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "cf57e31db5b84cd99edaec017d89f0c1",
              "usy-fbcore-dataflowgwg01": "a6209f7ec8fe4961862fec49a4d1bdc1",
              "usy-fbcore-messageregistryg01": "370bc28e2b674d7081ea9c839eb89a82",
              "usy-fbcore-dataflowsg01": "3a7c8987abfd4fcc88fb2ea3982e98e7",
              "usy-fbcore-processcontrolg01": "d4a30869edc642948814dd7733225fc2",
              "usy-fbcore-gridmodelmergingg01": "c132558ee4bf4bddad88aa9b8a5476ac",
              "usy-fbcore-raog01": "76640feac97a41be86feb7c3faba694e",
              "usy-fbcore-archiveg01": "f307b998707d444d8dfcbc691b39b890",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Unicorn Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          },
          "awid-JAO_WORKSPACE": {
            "appWorkspaces": [
              "JAO_WORKSPACE"
            ],
            "code": "14ddfe80689767143b0492c8dd4bf9c6",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "4f906639d6641c06eb440a2c8af7e25e",
              "usy-fbcore-dataflowgwg01": "1a3ce2ab40dc5dc805264463b3698cdc",
              "usy-fbcore-messageregistryg01": "7297ec08b2c689144d442136d62e1502",
              "usy-fbcore-dataflowsg01": "fcfd4bcc0cd46a8766d0cb55f0accaa8",
              "usy-fbcore-processcontrolg01": "1b1970da528e1b9155271eba4ffd9a36",
              "usy-fbcore-gridmodelmergingg01": "3dac2f4772ac3fe37cb83ce1478657c4",
              "usy-fbcore-raog01": "370118f1a8989305303b8c2b56fb5569",
              "usy-fbcore-archiveg01": "14ddfe80689767143b0492c8dd4bf9c6",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "JAO Workspace",
                "theme": "default",
                "priority": "2"
              }
            }
          }
        }
      },
      "usy-fbcore-fbcomputationsg01": {
        "workspaces": {
          "asid": {
            "appWorkspaces": [
              "asid"
            ],
            "code": "c2f333455f614100adbc28832bf01fa0",
            "uid": "asidOwner"
          },
          "awid-DAILY_PROCESS": {
            "appWorkspaces": [
              "DAILY_PROCESS"
            ],
            "code": "2d3feba11cb64890a7dbcafa93ee8ad1",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "2ca0ddf56fb14d3d98ac6ebadb2ac764",
              "usy-fbcore-dataflowgwg01": "fef9a1de0a4145aa80dc8dfb44f15db0",
              "usy-fbcore-messageregistryg01": "4a573f76fcea479f9d594de8c1077030",
              "usy-fbcore-dataflowsg01": "8e0ffebb60fb4e4780a0a30085516516",
              "usy-fbcore-processcontrolg01": "8a677e71453f4874b9f5e59bf01b3cc2",
              "usy-fbcore-gridmodelmergingg01": "833de08b97a447a681867b0077f4a4d2",
              "usy-fbcore-raog01": "78047ff8a8bc4bf09be12b7161e40542",
              "usy-fbcore-archiveg01": "53e1c5bd98dd467eaa1be30f1db0e30b",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Daily Process",
                "theme": "default",
                "priority": "1"
              }
            }
          }
        }
      },
      "usy-fbcore-configurationg01": {
        "workspaces": {
          "asid": {
            "appWorkspaces": [
              "asid"
            ],
            "code": "c25204a70d61490a83fe4e2a43cd22af",
            "uid": "asidOwner"
          },
          "awid-DAILY_PROCESS": {
            "appWorkspaces": [
              "DAILY_PROCESS"
            ],
            "code": "613aa9e046de4240a8a6bbd63c80f9ac",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "2ca0ddf56fb14d3d98ac6ebadb2ac764",
              "usy-fbcore-dataflowgwg01": "fef9a1de0a4145aa80dc8dfb44f15db0",
              "usy-fbcore-messageregistryg01": "4a573f76fcea479f9d594de8c1077030",
              "usy-fbcore-dataflowsg01": "8e0ffebb60fb4e4780a0a30085516516",
              "usy-fbcore-processcontrolg01": "8a677e71453f4874b9f5e59bf01b3cc2",
              "usy-fbcore-gridmodelmergingg01": "833de08b97a447a681867b0077f4a4d2",
              "usy-fbcore-raog01": "78047ff8a8bc4bf09be12b7161e40542",
              "usy-fbcore-archiveg01": "53e1c5bd98dd467eaa1be30f1db0e30b",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Daily Process",
                "theme": "default",
                "priority": "1"
              }
            }
          }
        }
      },
      "usy-fbcore-converterg01": {
        "workspaces": {
          "asid": {
            "appWorkspaces": [
              "asid"
            ],
            "code": "98df7dec231f4dfb823de4eec9fc35fe",
            "uid": "asidOwner"
          },
          "awid-DAILY_PROCESS": {
            "appWorkspaces": [
              "DAILY_PROCESS"
            ],
            "code": "2ffc8f8c9c064c998f968e79f95dbf1e",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "2ca0ddf56fb14d3d98ac6ebadb2ac764",
              "usy-fbcore-dataflowgwg01": "fef9a1de0a4145aa80dc8dfb44f15db0",
              "usy-fbcore-messageregistryg01": "4a573f76fcea479f9d594de8c1077030",
              "usy-fbcore-dataflowsg01": "8e0ffebb60fb4e4780a0a30085516516",
              "usy-fbcore-processcontrolg01": "8a677e71453f4874b9f5e59bf01b3cc2",
              "usy-fbcore-gridmodelmergingg01": "833de08b97a447a681867b0077f4a4d2",
              "usy-fbcore-raog01": "78047ff8a8bc4bf09be12b7161e40542",
              "usy-fbcore-archiveg01": "53e1c5bd98dd467eaa1be30f1db0e30b",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Daily Process",
                "theme": "default",
                "priority": "1"
              }
            }
          }
        }
      },
      "uu-asyncjobg01-main": {
        "workspaces": {
          "asid": {
            "appWorkspaces": [
              "asid"
            ],
            "code": "54dd75e300af4ddf84cb37e7f4778ceb",
            "uid": "asidOwner"
          },
          "awid-DAILY_PROCESS": {
            "appWorkspaces": [
              "DAILY_PROCESS"
            ],
            "code": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "2ca0ddf56fb14d3d98ac6ebadb2ac764",
              "usy-fbcore-dataflowgwg01": "fef9a1de0a4145aa80dc8dfb44f15db0",
              "usy-fbcore-messageregistryg01": "4a573f76fcea479f9d594de8c1077030",
              "usy-fbcore-dataflowsg01": "8e0ffebb60fb4e4780a0a30085516516",
              "usy-fbcore-processcontrolg01": "8a677e71453f4874b9f5e59bf01b3cc2",
              "usy-fbcore-gridmodelmergingg01": "833de08b97a447a681867b0077f4a4d2",
              "usy-fbcore-raog01": "78047ff8a8bc4bf09be12b7161e40542",
              "usy-fbcore-archiveg01": "53e1c5bd98dd467eaa1be30f1db0e30b",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Daily Process",
                "theme": "default",
                "priority": "1"
              }
            }
          },
          "awid-SCRIPT_ENGINE": {
            "appWorkspaces": [
              "SCRIPT_ENGINE"
            ],
            "code": "37cff33dbebb449b86558c3d94754d73",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {},
            "appWorkspaceConfig": {}
          }
        }
      },
      "uu-businessterritory-maing01": {
        "workspaces": {
          "asid": {
            "appWorkspaces": [
              "asid"
            ],
            "code": "3a4e77c7b0264a0a86aa462327568906",
            "uid": "asidOwner"
          },
          "awid-DAILY_PROCESS": {
            "appWorkspaces": [
              "DAILY_PROCESS"
            ],
            "code": "f4d8f34592b648acb101a363ff381b69",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "2ca0ddf56fb14d3d98ac6ebadb2ac764",
              "usy-fbcore-dataflowgwg01": "fef9a1de0a4145aa80dc8dfb44f15db0",
              "usy-fbcore-messageregistryg01": "4a573f76fcea479f9d594de8c1077030",
              "usy-fbcore-dataflowsg01": "8e0ffebb60fb4e4780a0a30085516516",
              "usy-fbcore-processcontrolg01": "8a677e71453f4874b9f5e59bf01b3cc2",
              "usy-fbcore-gridmodelmergingg01": "833de08b97a447a681867b0077f4a4d2",
              "usy-fbcore-raog01": "78047ff8a8bc4bf09be12b7161e40542",
              "usy-fbcore-archiveg01": "53e1c5bd98dd467eaa1be30f1db0e30b",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Daily Process",
                "theme": "default",
                "priority": "1"
              }
            }
          }
        }
      },
      "uu-script-engineg02": {
        "workspaces": {
          "asid": {
            "appWorkspaces": [
              "asid"
            ],
            "code": "3e19972d79ab4345a538bcc40de4fbdd",
            "uid": "asidOwner"
          },
          "awid-DAILY_PROCESS": {
            "appWorkspaces": [
              "DAILY_PROCESS"
            ],
            "code": "c5a3a0d9a9f0438eb69fa55065953e4f",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "2ca0ddf56fb14d3d98ac6ebadb2ac764",
              "usy-fbcore-dataflowgwg01": "fef9a1de0a4145aa80dc8dfb44f15db0",
              "usy-fbcore-messageregistryg01": "4a573f76fcea479f9d594de8c1077030",
              "usy-fbcore-dataflowsg01": "8e0ffebb60fb4e4780a0a30085516516",
              "usy-fbcore-processcontrolg01": "8a677e71453f4874b9f5e59bf01b3cc2",
              "usy-fbcore-gridmodelmergingg01": "833de08b97a447a681867b0077f4a4d2",
              "usy-fbcore-raog01": "78047ff8a8bc4bf09be12b7161e40542",
              "usy-fbcore-archiveg01": "53e1c5bd98dd467eaa1be30f1db0e30b",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Daily Process",
                "theme": "default",
                "priority": "1"
              }
            }
          }
        }
      },
      "uu-consoleg01-main": {
        "workspaces": {
          "asid": {
            "appWorkspaces": [
              "asid"
            ],
            "code": "f27c3307e48047a7b3c9f02ae7e127f5",
            "uid": "asidOwner"
          },
          "awid-DAILY_PROCESS": {
            "appWorkspaces": [
              "DAILY_PROCESS"
            ],
            "code": "7c0acefd47d544b1b485836309b8fae6",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "2ca0ddf56fb14d3d98ac6ebadb2ac764",
              "usy-fbcore-dataflowgwg01": "fef9a1de0a4145aa80dc8dfb44f15db0",
              "usy-fbcore-messageregistryg01": "4a573f76fcea479f9d594de8c1077030",
              "usy-fbcore-dataflowsg01": "8e0ffebb60fb4e4780a0a30085516516",
              "usy-fbcore-processcontrolg01": "8a677e71453f4874b9f5e59bf01b3cc2",
              "usy-fbcore-gridmodelmergingg01": "833de08b97a447a681867b0077f4a4d2",
              "usy-fbcore-raog01": "78047ff8a8bc4bf09be12b7161e40542",
              "usy-fbcore-archiveg01": "53e1c5bd98dd467eaa1be30f1db0e30b",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Daily Process",
                "theme": "default",
                "priority": "1"
              }
            }
          }
        }
      },
      "uu-applogstore-maing01": {
        "workspaces": {
          "asid": {
            "appWorkspaces": [
              "asid"
            ],
            "code": "2e1a3485e5b1e91cf33e7bdba3dc21ae",
            "uid": "asidOwner"
          },
          "awid-DAILY_PROCESS": {
            "appWorkspaces": [
              "DAILY_PROCESS"
            ],
            "code": "e272c04cabb9e73c866ed5149bddf2f8",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "2ca0ddf56fb14d3d98ac6ebadb2ac764",
              "usy-fbcore-dataflowgwg01": "fef9a1de0a4145aa80dc8dfb44f15db0",
              "usy-fbcore-messageregistryg01": "4a573f76fcea479f9d594de8c1077030",
              "usy-fbcore-dataflowsg01": "8e0ffebb60fb4e4780a0a30085516516",
              "usy-fbcore-processcontrolg01": "8a677e71453f4874b9f5e59bf01b3cc2",
              "usy-fbcore-gridmodelmergingg01": "833de08b97a447a681867b0077f4a4d2",
              "usy-fbcore-raog01": "78047ff8a8bc4bf09be12b7161e40542",
              "usy-fbcore-archiveg01": "53e1c5bd98dd467eaa1be30f1db0e30b",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Daily Process",
                "theme": "default",
                "priority": "1"
              }
            }
          }
        }
      },
      "usy-genericgui-maing01": {
        "workspaces": {
          "asid": {
            "appWorkspaces": [
              "asid"
            ],
            "code": "93c0c65d55aba52358f5255fa23ecc72",
            "uid": "asidOwner"
          },
          "awid-DAILY_PROCESS": {
            "appWorkspaces": [
              "DAILY_PROCESS"
            ],
            "code": "1c0cccc2f94617549e6d0b334adae8d2",
            "uid": "coreAuthorities",
            "awidOwner": "101-1-1-1",
            "common_configuration": {
              "usy-fbcore-guig01": "2ca0ddf56fb14d3d98ac6ebadb2ac764",
              "usy-fbcore-dataflowgwg01": "fef9a1de0a4145aa80dc8dfb44f15db0",
              "usy-fbcore-messageregistryg01": "4a573f76fcea479f9d594de8c1077030",
              "usy-fbcore-dataflowsg01": "8e0ffebb60fb4e4780a0a30085516516",
              "usy-fbcore-processcontrolg01": "8a677e71453f4874b9f5e59bf01b3cc2",
              "usy-fbcore-gridmodelmergingg01": "833de08b97a447a681867b0077f4a4d2",
              "usy-fbcore-raog01": "78047ff8a8bc4bf09be12b7161e40542",
              "usy-fbcore-archiveg01": "53e1c5bd98dd467eaa1be30f1db0e30b",
              "usy-fbcore-fbcomputationsg01": "2d3feba11cb64890a7dbcafa93ee8ad1",
              "usy-fbcore-configurationg01": "613aa9e046de4240a8a6bbd63c80f9ac",
              "usy-fbcore-converterg01": "2ffc8f8c9c064c998f968e79f95dbf1e",
              "uu-asyncjobg01-main": "c1c2ca6fa2c645f7a472d4ffc81f5c94",
              "uu-businessterritory-maing01": "f4d8f34592b648acb101a363ff381b69",
              "uu-script-engineg02": "c5a3a0d9a9f0438eb69fa55065953e4f",
              "uu-consoleg01-main": "7c0acefd47d544b1b485836309b8fae6"
            },
            "appWorkspaceConfig": {
              "appWorkspace": {
                "name": "Daily Process",
                "theme": "default",
                "priority": "1"
              }
            }
          }
        }
      }
    }
  }
  


Object.keys(workspacesJsonUME3.subApps).forEach(subApp => {
    Object.keys(workspacesJsonUME3.subApps[subApp].workspaces).forEach(workspace => {
        let index = Workspaces.indexOf(workspace.split("-")[1]);
        if (workspacesJsonUME3.subApps[subApp].workspaces[workspace].common_configuration) {
            Object.keys(workspacesJsonUME3.subApps[subApp].workspaces[workspace].common_configuration).forEach(item => {
                workspacesJsonUME3.subApps[subApp].workspaces[workspace]["common_configuration"] = {
                    ...workspacesJsonUME3.subApps[subApp].workspaces[workspace]["common_configuration"],
                    [item]: index >= awids[item].length ? awids[item][0]: awids[item][index]
                }
            })
            workspacesJsonUME3.subApps[subApp].workspaces[workspace]["async_common_configuration"] = workspacesJsonUME3.subApps[subApp].workspaces[workspace]["common_configuration"];
        }
        workspacesJsonUME3.subApps[subApp].workspaces[workspace] = {
            ...workspacesJsonUME3.subApps[subApp].workspaces[workspace],
            code: index >= awids[subApp].length ? awids[subApp][awids[subApp].length-1]: awids[subApp][index]
        };  
        
    });
    workspacesJsonUME3.subApps[subApp].workspaces["asid"].code = UucloudAmprion3MplsBasicSatWithIdccAsids[subApp];
    
});

fs.writeFileSync("C:/Users/jilek/desktop/superresult.json", JSON.stringify(workspacesJsonUME3, null, 4));

Object.keys(awids).forEach(app => {
    console.log(`${app}\n${awids[app].join("\n")}`);
    console.log("\n")
})