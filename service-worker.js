/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/bower_components/webcomponentsjs/webcomponents-lite.min.js","f04ed23700daeb36f637bfe095960659"],["/data/blog.json","868eaf91ad76acbb210833fa62521657"],["/data/en/resources.json","5e4d4cd9284ade96bac5190fc60b9a36"],["/data/hoverboard.config.json","3dae1098b5178ab4e8c6ecaa14514529"],["/data/partners.json","fd146c80a4788b86759178855e65e19e"],["/data/posts/2016-10-01-devfest-golang-training.markdown","73525414a5ca2bee4629e6e8c3a47b29"],["/data/posts/2016-10-07-devfest-hackathon-cfp.markdown","3464b7e44b2a2aad2a6a19ebc2fe0071"],["/data/posts/2016-10-18-devfest-speaker-cfp.markdown","68b329da9893e34099c7d8ad5cb9c940"],["/data/posts/code-of-conduct.markdown","7f39b9c9ea3a2b3acfab85b7eadd5ac1"],["/data/schedule.json","d366fd88624ab3406d984b0027d3ef8e"],["/data/sessions.json","30e96513fda4879b7a3f9707aad7b504"],["/data/speakers.json","f03280bf7185df4b117feddd2eb142a4"],["/data/team.json","f38d22efaf8086c971366c62abb7e4b6"],["/data/tweets.json","2efccddfb1d69128d78404d5bfb7584d"],["/data/uk/resources.json","e8ac8881ee207465b5f316ccff571970"],["/data/videos.json","f17c6890ce3e5d805aad7ee46da00fd7"],["/images/backgrounds/banner-orig.png","c68c829a291667ddf10c8b329ab02c34"],["/images/backgrounds/banner.png","23cd6966f4157656775afce99d21ce91"],["/images/backgrounds/coffee-break.jpg","283b8d543ba287acda89bade3e1a7eb4"],["/images/backgrounds/location_1.jpg","e7ca6b680523fc2af07619bb5f98b5ff"],["/images/backgrounds/location_2.jpg","be981803118e93d4b59a49a301114997"],["/images/backgrounds/location_3.jpg","df4451deb75414b2e5bed20f52e0b956"],["/images/backgrounds/lunch.jpg","1b7f9ec019a4391c25584c3bce7843d6"],["/images/dfnyc/bg.jpg","9918ac80b5bca9771e6879358ce25764"],["/images/dfnyc/bg_learn.jpeg","fd589bc026775e1998a136b12010e7cc"],["/images/dfnyc/bg_robotai.jpeg","132578b53b782760b5d050e4577901b6"],["/images/dfnyc/blog_coc.jpg","a631915569a647e4fd40fd1b0be2dc42"],["/images/dfnyc/blog_golang.png","54cb1f394a9f5804b071747b7e0f517c"],["/images/dfnyc/bulbs.jpeg","b6396a3b3433bf3bd5c123e6101d7ffe"],["/images/dfnyc/coffee.jpeg","896db9e3052bea4102e448736c878dff"],["/images/dfnyc/devfestnyc_logo.svg","f8af37c5e23ecb49b65373d2377427c0"],["/images/dfnyc/fs-logo.png","22a4a287e1952e58eadfb8cc0c935de4"],["/images/dfnyc/gdgnyc-logo.png","9d55dac403f878c443265e90ef40450b"],["/images/dfnyc/hack.jpg","9760e4f23fed8936df09ae9f940c16a3"],["/images/dfnyc/logo-gdgnyc.png","97b6ce014998011cafb8dab7f7a017ce"],["/images/dfnyc/logo-oreilly.jpg","607526b6fb7900d5c2a826c4a2fd1d38"],["/images/dfnyc/logo-vrvu.png","a0a34b4d7c46e145acb03f3bc3906bca"],["/images/dfnyc/logo-wtm.png","b0249d71f2efb43ce277d66ed2ac9112"],["/images/dfnyc/lunch.jpeg","e175a7a84ce6824e3c003db0b11bd430"],["/images/dfnyc/nyc.jpeg","1a19a8ea762b368dde8b250929215d60"],["/images/dfnyc/social-share.png","035e987c2d48e842d24c7bd319639901"],["/images/dfnyc/talk.jpeg","bbee48a386a211ff2f4b83eaae3af327"],["/images/dfnyc/thanks.jpeg","c4aac50ac15c23cb7b766e8e37cf4377"],["/images/dfnyc/workshop.jpeg","e490f2abfe88c405950bbee542cdefdf"],["/images/favicon/favicon-72.png","8a50435f9af90132f255eb24018c68dc"],["/images/favicon/favicon.ico","b86585686052335d3f7ef73973e18aef"],["/images/favicon/favivon-32.png","a9509ca258731e12d52dd223ad1ba4c8"],["/images/gdg-logo.svg","a124fcbb532a30ad2342b16662695bdf"],["/images/icon-android.png","5ffebc22fcdb23a5ae87543cde3e2af9"],["/images/icon-cardboard.png","a36c383231389a7d22348299db5e3191"],["/images/icon-chrome.png","66db6aa65202770f985087590ff84ba0"],["/images/icon-firebase.png","880c17ba56a999f71837ff9177c7b8d1"],["/images/logo-gray.png","75cf2004fcab046fd97a19927397465f"],["/images/logo-gray.svg","f8af37c5e23ecb49b65373d2377427c0"],["/images/logo-light.svg","75f45b80d3e64d114f910351b33f361d"],["/images/logo-white-color.svg","666b92e8d450224dfe635cabf737764c"],["/images/logo-white.svg","bab57ad3a46e5a29d88d54db917040ab"],["/images/logo.svg","68a5eeb613ef13b8d6453ede61d86a65"],["/images/logos/FS.png","a3c0d8013e68e3e6377e35ce1c3fd3fe"],["/images/logos/GA.png","45a1d072533d7ae5937ad8256c9612e2"],["/images/logos/gde.png","ed4b23f3cbb92d091693c46bdadc8f14"],["/images/logos/gdg-lviv.svg","557e52d18aed88a36197d1388c67c985"],["/images/logos/gdg-x.svg","f8fb99f2d34c78761130651f9d46c5ed"],["/images/logos/google.svg","888b314b2d82dac34ba4f7d1df8e0a84"],["/images/logos/logo_apprenda.png","31e54d787bb21a6454b2a83a3c081e53"],["/images/logos/logo_broadway.png","05c94e6e64161868deb71d498428f276"],["/images/logos/logo_casterio.png","a706da4c3c117a6c33f40373226ff24e"],["/images/logos/logo_checkmate.png","ac8a9d248f9be1a7a81fafd6254f6549"],["/images/logos/logo_clarifai.png","089fb7bafe48f532c64ec8accf0a5f44"],["/images/logos/logo_columbia.jpg","82424b96f6f5bb91ace1e9d530c9c038"],["/images/logos/logo_condenast.png","e75a366a712651e08667b1e4186792ee"],["/images/logos/logo_devfest.svg","f8af37c5e23ecb49b65373d2377427c0"],["/images/logos/logo_fs.png","22a4a287e1952e58eadfb8cc0c935de4"],["/images/logos/logo_gde.png","86f354f17961d214f89f004c4408e756"],["/images/logos/logo_gdgnyc.png","97b6ce014998011cafb8dab7f7a017ce"],["/images/logos/logo_google.png","9a344d6cdd66f3fa4c3edfcb3b6faf1e"],["/images/logos/logo_intel.png","f8d1f3b3cb54ac28c427bbd9e89ac0de"],["/images/logos/logo_nyc.png","2c061e624a47adc017bc9d794d214a9b"],["/images/logos/logo_nyt_dev.png","4fd7e9d6eaa51929e9a89487ae2172a8"],["/images/logos/logo_oreilly.png","1659e75a4b6010560f6b8b172dd3343d"],["/images/logos/logo_photoshelter.png","9858080b0eb8e0179cd55a077f58bcff"],["/images/logos/logo_sketchfab.png","b462b9d53a1f40eeeaca5bfdf866a67f"],["/images/logos/logo_touchlab.png","607ebf5e4124bf80e3fde2eeea25fb03"],["/images/logos/logo_twitter.png","626ecc149649ec8ddb5853e12d87625c"],["/images/logos/logo_vrvu.png","a0a34b4d7c46e145acb03f3bc3906bca"],["/images/logos/logo_xai.png","7ec08c2e0c0d6f2c476e1be55fa18a7c"],["/images/speaker-cards/19201_Juarez-Filho-HowToCreateStartup.png","769e29706c4ad00f61b7de60c7c363c2"],["/images/speaker-cards/19202_Wesley-Chun-IntroGSuiteAPIs.png","52c38ca9d293ae350a0a10c9bd3331b3"],["/images/speaker-cards/19203-Jeff-Posnick-ToolsLibrariesPWA.png","ee3f78ee8efd3bf1b72af498ed2f3664"],["/images/speaker-cards/19204_Joshua-Gordon-StarryNightTensorFlow.png","92da57f1d2aa00325022095d5a892128"],["/images/speaker-cards/19205_Andreas-Mueller-EngineeringOpenSourceML.png","32c74cbe4fdfb32c8e94fc507986302c"],["/images/speaker-cards/19206_Yufeng-Guo-CloudMLAPIs.png","fe57f9a6aa86e69c8a9c5a98f7187063"],["/images/speaker-cards/19207_Sree-Sreenivasan-FiresideChat.png","b7f80cee264532ce9d262cf5ec9b5c0e"],["/images/speaker-cards/19208_group-WhatsNextML.png","7e535f0fc8d8df75d6ac513672e965f7"],["/images/speaker-cards/19209_Enrique-Lopez-Manas-AndroidContinuousIntegration.png","1047f8854601c23a022aef1baebc2888"],["/images/speaker-cards/19210_group-IntroKubernetes.png","45b1a672d5b0a5412a43d92fa881c6fc"],["/images/speaker-cards/19211_Frank-van-Puffelen-FirebasePrimitives.png","ed7fb36f71ed6d1a0e9c6d323da08bd3"],["/images/speaker-cards/19212_Mika-Sibony-FirebaseAnalytics.png","62746cc72c7a3beb78cf191f196f22a7"],["/images/speaker-cards/19301_Chris-Gaun-GettingStartedKubernetes.png","c4f07038e382d6e93de8111e1c5fa965"],["/images/speaker-cards/19302_group-AndroidPerformance.png","98c4a079a5284cb0c46a3dc61207934b"],["/images/speaker-cards/19303_Lex-Dreitser-VRARMR360.png","c4dcffe64868b2bd394e69c00952d21e"],["/images/speaker-cards/19304_group-CrashCourseReactRedux.png","ba708e641bc3070c6ea5c5f71b803590"],["/images/speaker-cards/20201_Murat-Yener-Android7Dwarves.png","62aa6252679ab1a4c2fe29e4b1086364"],["/images/speaker-cards/20202_Donn-Felker-Realm.png","b71d6d35e834efce37a233bbf369bfb0"],["/images/speaker-cards/20203_Israel-Ferrer-Camacho-SmokeMirrors.png","2ff451122a602b7db63c6d97f826686d"],["/images/speaker-cards/20204_Faisal-Abid-IntroGoogleFlutter.png","b81e979944631064a6c82f02dcd812a8"],["/images/speaker-cards/20205_Oscar-Perez-GoogleAMPScale.png","93589ed076b7585e31103b909fb73fb5"],["/images/speaker-cards/20206_Westbrook-Johnson-Polymer.png","9b1873f5c47f26b73bd36efe09545e9b"],["/images/speaker-cards/20207_Ben-Milton-DoseGraphQL.png","0c21a884e3e6a6eb382ab958d1ab1e1f"],["/images/speaker-cards/20208_Michael-Solati-NgmetaGotchu.png","43653036e025f749727c6bd832392c39"],["/images/speaker-cards/20209_Wilson-Lee-InteractiveUI.png","5a321f8d4a00fd06154a267a8282ca6d"],["/images/speaker-cards/20301_Yufeng-Guo-TensorFlowDeepLearning.png","3f8dc02e4042531344d45e05ae57523b"],["/images/speaker-cards/20302_Liam-Spradlin-PixelPerfectPractical.png","07e62cb05f487cf25c2a88c69628c5ad"],["/images/speaker-cards/20303_group-Sketchfab.png","ce863d1391a8279aaa4cf08d6aa360af"],["/images/speaker-cards/20304_Cesar-Anton-Dorantes-GettingStartedWebRTC.png","40ec29ffe718cfea4f0e77e103047801"],["/images/speaker-cards/20305_Nitya-Narasimhan-ScratchBlocklyItch.png","f64f4306a0ee6c1e70f6c6b6e64ba7de"],["/images/speaker-cards/Ben-Milton-DoseGraphQL-chrome.png","2c4e102de90de7d31b650aa659a006f7"],["/images/speaker-cards/Cesar-Anton-Dorantes-GettingStartedWebRTC-chrome.png","5d7a9e84e31c8304dcc65b6685223c90"],["/images/speaker-cards/Chris-Gaun-GettingStartedKubernetes-firebase.png","cae6f6c4b7d3f4facd9275a4e9b79bc7"],["/images/speaker-cards/Chris-Gaun-IntroKubernetes-firebase.png","dbabe729e23027ba46191e70ce73272f"],["/images/speaker-cards/Chris-Gaun-IntroKubernetes-kubernetes.png","64b87cc8872cde2851a1051a003ab017"],["/images/speaker-cards/Guillermo-Sainz-Sketchfab-chrome.png","4afebba2af6fa83137de7c2a70668955"],["/images/speaker-cards/Guillermo-Sainz-Sketchfab-sketchfab.png","159c0645351528f5ab7a9bc09482a9e8"],["/images/speaker-cards/Issac-Arias-IntroKubernetes-firebase.png","f690e0d9cd5bc3e464824cfb6782aea9"],["/images/speaker-cards/Issac-Arias-IntroKubernetes-kubernetes.png","3c9f6ec973e78c7889eb095ac1bd2fba"],["/images/speaker-cards/James-Green-Sketchfab-chrome.png","25e4435c2cea4aabe7d03e1665a8e6b7"],["/images/speaker-cards/James-Green-Sketchfab-sketchfab.png","b0ed6252970a12fd76947e7de9bf592c"],["/images/speaker-cards/Jeff-Katz-CrashCourseReactRedux-react.png","c348303a5a6d9783ffe0aca32e84fb9d"],["/images/speaker-cards/Jeff-Katz-CrashCourseReactRedux-web.png","a74bfe709193aa01181ce5d55379b169"],["/images/speaker-cards/Leigh-Scherrer-CrashCourseReactRedux-react.png","2961672e5c74c761e21d20faef6ffd98"],["/images/speaker-cards/Leigh-Scherrer-CrashCourseReactRedux-web.png","b2f93b1f7c0c3efb0459909bac9595cf"],["/images/speaker-cards/Michael-Solati-ngmeta-gotchu-chrome.png","f59ea8352a05b1119599e640be681e19"],["/images/speaker-cards/Mike-Nakhimovich-AndroidPerformance.png","a5400af6ef3cfd47a621c2103c5e23dc"],["/images/speaker-cards/Sophie-DeBenedetto-CrashCourseReactRedux-react.png","4866f5280ec588e28386a76bf682ed26"],["/images/speaker-cards/Sophie-DeBenedetto-CrashCourseReactRedux-web.png","f96b1418d57729d76dd1b119ac0c57d1"],["/images/speaker-cards/Westbrook-Johnson-Polymer-chrome.png","dce5639bcea4d325b813f1cea51d09a6"],["/images/speaker-cards/Wilson-Lee-InteractiveUI-chrome.png","c1cac5138a04d4c8b9d903b3b3309ce0"],["/images/speaker-cards/Yufeng-Guo-TensorFlowDeepLearning-ml.png","9921e909f5de12aa621a6e89803729d7"],["/images/speakers/speaker_andreas.jpg","402918ad9fe8ab155c9a3fb28fa1eaeb"],["/images/speakers/speaker_antonino.jpg","bbd8aa1727f5ef096a5a2b3908c16d22"],["/images/speakers/speaker_brian.jpg","81b8e10b81de1b184a442d2c0a13fe0a"],["/images/speakers/speaker_cesar.png","7016b77559b2011bf70db882f70c09cd"],["/images/speakers/speaker_chris.jpg","9309e3c945258b0bb60268a819b45151"],["/images/speakers/speaker_donn.jpg","b1328bba514ba2cb694fc062f49e6da6"],["/images/speakers/speaker_enrique.jpeg","a11a2e7fdf8cc87380067249647c9486"],["/images/speakers/speaker_faisal.jpg","badbe6c95c4ba16173e1c02f5445b988"],["/images/speakers/speaker_guillermo.jpg","7dfc57ada3a040bb97fca9f19afd652c"],["/images/speakers/speaker_ike.jpg","60a1471706b0fa123c4b266333efe0cd"],["/images/speakers/speaker_james.jpg","0489e4274c407f03c78a22b8044ed902"],["/images/speakers/speaker_jeff.jpg","bc30a857bee817adeae4ba95d50635be"],["/images/speakers/speaker_jeffsmith.jpg","b22e8126fe875a3c88a5873f000e5af1"],["/images/speakers/speaker_josh.jpg","e09caf16b7159318878a6fc583c8c1a9"],["/images/speakers/speaker_juarez.jpg","38454177d2dd206ecbb1dcb10f728508"],["/images/speakers/speaker_katz.jpg","5049d9db3a6f7e4acfba9a6f4b2b8454"],["/images/speakers/speaker_lex.jpg","fdde3dffbfa08c085833844c098c0073"],["/images/speakers/speaker_liam.jpg","adb8ccf1f18b839a79d7e794e85beaf1"],["/images/speakers/speaker_matt.png","2f06e618e3bd0329cc3d5f5edc03348d"],["/images/speakers/speaker_mika.jpg","153c15ae5dbb79badbf6f0de03aa7428"],["/images/speakers/speaker_mika.png","3ccd96eb291b84503601dd90da1df1c5"],["/images/speakers/speaker_mikhail.jpg","75f052e325ab02d97b165766b9fa0eb1"],["/images/speakers/speaker_milton.jpg","512f6a18c32dbbfb1973190fc6ee405a"],["/images/speakers/speaker_murat.jpg","ede5914ef8bdcc2128d88ae9e7860f2f"],["/images/speakers/speaker_nitya.jpg","5e7f56eae378b8bfa72194cfed3df969"],["/images/speakers/speaker_oscar.jpeg","ad8c93a9a1613f6f72830fb2b03896b7"],["/images/speakers/speaker_puf.jpeg","d99913df83b3493e1295b82b78ed6d94"],["/images/speakers/speaker_rallat.jpeg","868f8f84b9e94bfe51748b4e084ed270"],["/images/speakers/speaker_solati.jpg","726255931b986781aee733a1e6598896"],["/images/speakers/speaker_sophie.jpg","81495e7854477b9c4dd7a086262d64df"],["/images/speakers/speaker_sree.jpg","d7e3e15812b96b3185364e20df80c311"],["/images/speakers/speaker_wes.jpg","dbb6379e22bc78e7761440de5f352848"],["/images/speakers/speaker_westbrook.png","eb5c2d6037ba130b62898c2733721a95"],["/images/speakers/speaker_wilson.jpeg","d550be9b06881d0df2f5774918222fa0"],["/images/speakers/speaker_yufeng.jpg","f584653719a108271794160179ed9080"],["/images/touch/homescreen-144.png","777fba2c9ab035808a6925ca611bc67f"],["/images/touch/homescreen-168.png","fc1f8e5f1a213ad6c2731c089fef3de1"],["/images/touch/homescreen-192.png","1775ae0aca4e1db5d5b1650a3b2c7eac"],["/images/touch/homescreen-256.png","c30a7a4972a7b4a5c0ad7c9572cb3e87"],["/images/touch/homescreen-48.png","0a740b7afb3040a80eb0622ee24b35ac"],["/images/touch/homescreen-72.png","8a50435f9af90132f255eb24018c68dc"],["/images/touch/homescreen-96.png","0f6e04240af1efb86d43d278564d46ac"],["/index.html","26c786bfbe68f243eea648dd6c2bfa88"],["/manifest.json","3ce70ac12a233919d841990145d98f42"],["/scripts/bootstrap.js","ed50113d210e9ac60efcefc68dd6834d"],["/scripts/helper/deferred.js","00ad32e38a07f247290c2f67e536d711"],["/scripts/helper/elements.js","0ca8fba3ee9ce7cba1d836a0bed8afea"],["/scripts/helper/promise-polyfill.js","bce372630e22345ff83479f41c533046"],["/scripts/helper/service-worker-registration.js","2e10c2ced9d00afc996e1b9beb8f1cee"],["/scripts/helper/util.js","36c5192324d40e060799d58a38f96ef6"],["/scripts/metrics.js","8623bff01545e628beb021b08b8afa31"],["/src/behaviors/localize-behavior.html","5c9051994ed4cb58f9ca0a2cfbf0c483"],["/src/behaviors/page-behavior.html","7a14e88bebe781a58ef61c15252a8e4d"],["/src/behaviors/share-behavior.html","cb664197f584d8b10b94d069c119214c"],["/src/behaviors/utils-behavior.html","2e544f9c4b49f3af3a1152174baa2916"],["/src/effects/fade-effect.html","8ee4b618e5e00c5b2c822a7bdddfa1b1"],["/src/elements/about-block.html","bed1462f08b432d21111284783e15353"],["/src/elements/animatable-content.html","f4b07f855a4880b041ad91499007f74f"],["/src/elements/app-data.html","2d5850928498309e76a4f02486517899"],["/src/elements/call-to-action.html","58c8850a7cfa5abd00c3b21a90c43c07"],["/src/elements/drawer-block.html","ea984cd3fca83cf56a8e58e5b138382a"],["/src/elements/featured-people.html","254d16cf2e8ed54ffab8ed8b3f8e61ea"],["/src/elements/featured-videos.html","80d4e598376a9dc8df9aaf1e8ba40108"],["/src/elements/footer-block.html","455b8cc83329065e43df6fed5b72e9c2"],["/src/elements/header-content.html","29db4225d1a7651c192e75ea56a9a4a1"],["/src/elements/latest-posts.html","d3e3d6d0f23c46347fba03a7478f44f1"],["/src/elements/logos-block.html","6237343bedf8dbdcaef81d89ebcfe71c"],["/src/elements/mailchimp-subscribe.html","080ada45390e247ba278fa6f5a16634f"],["/src/elements/map-block.html","f4f3311ae5b41f230a3341105e1327a9"],["/src/elements/photo-block.html","6fc4977db8e046054608eb7f680a905e"],["/src/elements/schedule-day.html","9b4989b2c3440c0123a68eca98825e6b"],["/src/elements/schedule-subnav.html","b07aa2953b04fc1f343f614f23ab3974"],["/src/elements/session-details.html","29c1f46f8ec7d30b3e17f59a91d831d1"],["/src/elements/social-feed.html","fa4b6815f37f5a0d2711e82b0375ca96"],["/src/elements/social-post.html","cd9164247079ccdca86f1cfed3a09b7c"],["/src/elements/speaker-details.html","b187afdc96c187597deb35f382d2ebcf"],["/src/elements/statistics-block.html","3275ecc1d2acd05ca638506c9e38b297"],["/src/elements/ticket-element.html","5d45c106694c8863ab7065dcec846152"],["/src/elements/tickets-block.html","8dfcecb54aee013d036b1e2865eb423e"],["/src/elements/toast-element.html","98359bdea80551d1a42cc76c23292fae"],["/src/elements/toolbar-block.html","214c354cc22d690652ef63fbdfb89ec6"],["/src/elements/truncate-marked-text.html","a4e2ead87bcb1526e38395b8c5525a23"],["/src/elements/video-dialog.html","77cc165d7ad1aa76df137b03af61d69d"],["/src/hoverboard-app.html","877fede5ea0ad183e5dcc3d1ca6878d1"],["/src/js-wrappers/g-plusone.html","abcc292603de43782fa49f6fd952a4a6"],["/src/js-wrappers/time-element-wrapper.html","cc26ded5c3021fdfb09304414b2e0af1"],["/src/pages/blog-list.html","b0621b3feed8ff0900dee19f5c98177b"],["/src/pages/blog-page.html","558f2a547620a3595979ac881f0a664a"],["/src/pages/cod-page.html","d077a020d6a3b27c6ecd998acd186022"],["/src/pages/home-page.html","461db670e830f2e539034199b74601eb"],["/src/pages/post-page.html","5afd570b193d39ab50ddd61c463efaee"],["/src/pages/schedule-page.html","eb6e4d590eee637bde800fecf1247843"],["/src/pages/speakers-page.html","13b754e4011d627d280481c5e293e989"],["/src/pages/team-page.html","9865467cea208cdd5b572e002a30e79d"],["/src/styles/dialog-styles.html","3b77caf32729d5ad12e130eab4e4012d"],["/src/styles/icons.html","bc6fc739ddabc1dce834e1d8c9df1a69"],["/src/styles/mixins.html","a97221af3b44a1b3ca296ab0b5d4e10e"],["/src/styles/shared-styles.html","b6e73a87e1e1041a883c2afd4580e4df"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '/index.html';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




