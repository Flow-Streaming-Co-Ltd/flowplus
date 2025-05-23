const basePath = '/flowplus.ph'; // IMPORTANT: For GitHub Pages, this is /<repository-name>
const streams = [
   { name: 'Kapamilya Channel', logo: 'https://static.wikia.nocookie.net/abscbn/images/7/74/Kapamilya_Channel_3D_Logo.png', type: 'mpegdash', manifestUri: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-kapcha-dash-abscbnono/index.mpd', clearKey: { 'bd17afb5dc9648a39be79ee3634dd4b8' : '3ecf305d54a7729299b93a3d69c02ea5' }, category: "GENERAL" }, { name: 'TV5 HD', logo: 'https://static.wikia.nocookie.net/tv5network/images/9/95/TV5_HD_2024.svg', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd', clearKey: { '2615129ef2c846a9bbd43a641c7303ef': '07c7f996b1734ea288641a68e1cfdc4d' }, category: "GENERAL" }, { name: 'A2Z', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/A2Z_Channel_11_Logo.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_a2z.mpd', clearKey: { 'f703e4c8ec9041eeb5028ab4248fa094': 'c22f2162e176eee6273a5d0b68d19530' }, category: "GENERAL" }, { name: 'GMA Pinoy TV', logo: 'https://upload.wikimedia.org/wikipedia/en/a/af/GMA_Pinoy_TV_logo.png', type: 'mpegdash', manifestUri: 'https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-abscbn-gma-x7-dash-abscbnono/7c693236-e0c1-40a3-8bd0-bb25e43f5bfc/index.mpd', clearKey: { 'c95ed4c44b0b4f7fa1c6ebbbbaab21a1': '47635b8e885e19f2ccbdff078c207058' }, category: "OVERSEAS" }, { name: 'TFC', logo: 'https://img.mytfc.com/cmsroot/abscms/media/mytfctv/channels/tfc/logos/tfc_logo_800px.png?ext=.png', type: 'mpegdash', manifestUri: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-tfcasia-dash-abscbnono/7045bc3c-9492-42d4-974e-a3b217776e57/index.mpd', clearKey: { '9568cc84e1d944f38eac304517eab6fd': 'f12142af8f39b3bab79d3679d3665ebe' }, category: "OVERSEAS" }, { name: 'PBO', logo: 'https://static.wikia.nocookie.net/tvfanon6528/images/5/53/PBO_%282020-.n.v.%29.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/pbo_sd.mpd', clearKey: { 'dcbdaaa6662d4188bdf97f9f0ca5e830': '31e752b441bd2972f2b98a4b1bc1c7a1' }, category: "MOVIES" }, { name: 'Sari-Sari', logo: 'https://i.imgur.com/MXxN1UO.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd', clearKey: { '0a7ab3612f434335aa6e895016d8cd2d': 'b21654621230ae21714a5cab52daeb9d' }, category: "ENTERTAINMENT" }, { name: 'Viva Cinema', logo: 'https://static.wikia.nocookie.net/logopedia/images/0/07/Viva_Cinema_2021.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/viva_sd.mpd', clearKey: { '07aa813bf2c147748046edd930f7736e': '3bd6688b8b44e96201e753224adfc8fb' }, category: "MOVIES" }, { name: 'ANC', logo: 'https://img.mytfc.com/cmsroot/abscms/media/mytfctv/channels/anc/anc-logo.png?ext=.png', type: 'mpegdash', manifestUri: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-anc-global-dash-abscbnono/index.mpd', clearKey: { '4bbdc78024a54662854b412d01fafa16': '6039ec9b213aca913821677a28bd78ae' }, category: "NEWS" }, { name: 'TVN Movies Pinoy', logo: 'https://static.wikia.nocookie.net/russel/images/e/e3/TvN_Movies_Pinoy_Logo_2023.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tvnmovie.mpd', clearKey: { '2e53f8d8a5e94bca8f9a1e16ce67df33': '3471b2464b5c7b033a03bb8307d9fa35' }, category: "MOVIES" }, { name: 'TMC', logo: 'https://static.wikia.nocookie.net/russel/images/4/41/Tagalized_Movie_Channel_Logo_2021.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tagalogmovie.mpd', clearKey: { '96701d297d1241e492d41c397631d857': 'ca2931211c1a261f082a3a2c4fd9f91b' }, category: "MOVIES" }, { name: 'Animax', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Animaxlogo-20160701.png', type: 'mpegdash', manifestUri: 'https://tglmp01.akamaized.net/out/v1/de55fad9216e4fe7ad8d2eed456ba1ec/manifest.mpd', clearKey: { 'edf1a715de9748638dd2fad75a419af2': '2f5a3199b26e9b693ae881af7ff864cf' }, category: "KIDS" }, { name: 'Cartoon Network', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Cartoon_Network.svg/1200px-Cartoon_Network.svg.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cartoonnetworkhd.mpd', clearKey: { 'a2d1f552ff9541558b3296b5a932136b': 'cdd48fa884dc0c3a3f85aeebca13d444' }, category: "KIDS" }, { name: 'DreamWorks (ENGLISH-FILINO)', logo: 'https://dreamworks-asia.com/images/dwalogo.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_dreamworktag.mpd', clearKey: { '564b3b1c781043c19242c66e348699c5': 'd3ad27d7fe1f14fb1a2cd5688549fbab' }, category: "KIDS" }, { name: 'DreamWorks (ENGLISH)', logo: 'https://dreamworks-asia.com/images/dwalogo.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_dreamworks_hd1.mpd', clearKey: { '4ab9645a2a0a47edbd65e8479c2b9669': '8cb209f1828431ce9b50b593d1f44079' }, category: "KIDS" }, { name: 'Moonbug Kids', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Moonbug_Kids.svg', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_moonbug_kids_sd.mpd', clearKey: { '0bf00921bec94a65a124fba1ef52b1cd': '0f1488487cbe05e2badc3db53ae0f29f' }, category: "KIDS" }, { name: 'Nickelodeon', logo: 'https://static.wikia.nocookie.net/nickelodeon/images/7/7e/2023_Nick_3D.png', type: 'mpegdash', manifestUri: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2511/default_primary.mpd', clearKey: { 'd8520e96a1283ab6e5be538474bfa810': 'bda5f7bbc1e44096f779a0619fe9881f' }, category: "KIDS" }, { name: 'Nick Jr', logo: 'https://static.wikia.nocookie.net/dreamlogos/images/2/28/Nick_Jr._%282023%2C_3D%29.png', type: 'mpegdash', manifestUri: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/9982/default_primary.mpd', clearKey: { 'fa65220c9f76e424173899df533a6d10': 'b4abbee95b69b3e80a0d141272c870db' }, category: "KIDS" }, { name: 'HBO', logo: 'https://static.wikia.nocookie.net/hbo-max/images/1/1e/HBO-WhiteLogo.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbohd.mpd', clearKey: { 'd47ebabf7a21430b83a8c4b82d9ef6b1': '54c213b2b5f885f1e0290ee4131d425b' }, category: "MOVIES" }, { name: 'HBO Family', logo: 'https://images.now-tv.com/shares/channelPreview/img/en_hk/color/ch112_425_305', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbofam.mpd', clearKey: { '872910c843294319800d85f9a0940607': 'f79fd895b79c590708cf5e8b5c6263be' }, category: "MOVIES" }, { name: 'HBO Signature', logo: 'https://images.now-tv.com/shares/channelPreview/img/en_hk/color/ch114_425_305' , type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_hbosign.mpd', clearKey: { 'a06ca6c275744151895762e0346380f5': '559da1b63eec77b5a942018f14d3f56f' }, category: "MOVIES" }, { name: 'HBO Hits', logo: 'https://images.now-tv.com/shares/channelPreview/img/en_hk/color/ch111_425_305', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hbohits.mpd', clearKey: { 'b04ae8017b5b4601a5a0c9060f6d5b7d': 'a8795f3bdb8a4778b7e888ee484cc7a1' }, category: "MOVIES" }, { name: 'Cinemax', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/611-cinemax.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_cinemax.mpd', clearKey: { 'b207c44332844523a3a3b0469e5652d7': 'fe71aea346db08f8c6fbf0592209f955' }, category: "MOVIES" }, { name: 'Hits Now', logo: 'https://static.wikia.nocookie.net/logopedia/images/6/6b/HITS_Now_logo.svg', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hitsnow.mpd', clearKey: { '14439a1b7afc4527bb0ebc51cf11cbc1': '92b0287c7042f271b266cc11ab7541f1' }, category: "MOVIES" }, { name: 'Hits', logo: 'https://static.wikia.nocookie.net/logopedia/images/e/e9/Hits_%28Southeast_Asia%29.svg', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/hits_hd1.mpd', clearKey: { 'dac605bc197e442c93f4f08595a95100': '975e27ffc1b7949721ee3ccb4b7fd3e5' }, category: "MOVIES" }, { name: 'Hits Movies', logo: 'https://static.wikia.nocookie.net/russel/images/b/b9/Hits_Movies_Logo_2018.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_hitsmovies.mpd', clearKey: { 'f56b57b32d7e4b2cb21748c0b56761a7': '3df06a89aa01b32655a77d93e09e266f' }, category: "MOVIES" }, { name: 'AXN', logo: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bffc537d-17b1-465d-ab34-d477223ac142/dcnrfjn-4763cb55-6830-4ec4-b6de-81491c0b160f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JmZmM1MzdkLTE3YjEtNDY1ZC1hYjM0LWQ0NzcyMjNhYzE0MlwvZGNucmZqbi00NzYzY2I1NS02ODMwLTRlYzQtYjZkZS04MTQ5MWMwYjE2MGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7GSBz7ADt-M1We0EvbvdZE7ieGH1PGxtTWGwcWTMFL8', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_axn_sd.mpd', clearKey: { 'fd5d928f5d974ca4983f6e9295dfe410': '3aaa001ddc142fedbb9d5557be43792f' }, category: "ENTERTAINMENT" }, { name: 'Warner TV', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Warner2018LA.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_warnertvhd.mpd', clearKey: { '4503cf86bca3494ab95a77ed913619a0': 'afc9c8f627fb3fb255dee8e3b0fe1d71' }, category: "MOVIES" }, { name: 'Rock Action', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Rock_Action.png', type: 'mpegdash', manifestUri: 'https://tglmp04.akamaized.net/out/v1/421a3cd3bdcd492f8f4b5efb2363ed2c/manifest.mpd', clearKey: { '2341c2ecd3cf4865881bb0fa1287de8f': 'ad45202e64f66ef36b3f60fac93cc47f' }, category: "ACTION + CRIME" }, { name: 'Rock Entertainment', logo: 'https://cdn.prod.website-files.com/67ad5259c6e804a40b4bae92/67ad5259c6e804a40b4bb0c1_logo_ent_red_web.png', type: 'mpegdash', manifestUri: 'https://tglmp02.akamaized.net/out/v1/621a7089e63144e4be7891cd9bfb10e2/manifest.mpd', clearKey: { '9229814c629b406f8de98d2f23c968a0': '40b9f250455b43b3b2ea6845ab81abca' }, category: "ENTERTAINMENT" }, { name: 'Thrill', logo: 'https://media-hosting.imagekit.io/72fa47fa3d6f4d77/undefined%20-%20Imgur.png?Expires=1841671741&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=l6fYowg99VIlOqhv9oe2nUc~H1~I0wZdcLTWupYIGDt198XygiPlzyGMLIClCN2eRs9Cf0U81i8jARmB5qVL1L~Czze55sEbUBuiBfp6oL8L8weFcVRqpvMpHn6haPlarSG9W--vfjntaxISo0Zagy1sbRiwZmC4oswVegzFkuA95VGOY5RXNn8Rb~Np9PVXUcgSePPuxadS2ppiqYwxF9eEbu9HgsY1e8spFsesPqL5LZD31UUZG9LaGWmJv2v1hB71BcyG45mmQZrglo0b~rPAW3tlrkIRwBjJmQWipGt1ETksYsNKK8ofC02UPbeyGZsiyKQA67C1tK7PDda8JQ__', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_thrill_sd.mpd', clearKey: { '928114ffb2394d14b5585258f70ed183': 'a82edc340bc73447bac16cdfed0a4c62' }, category: "MOVIES" }, { name: 'Lotus Macau', logo: 'https://cms.cignal.tv/Upload/Thumbnails/mo-macau-lotus-tv-3757.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/lotusmacau_prd.mpd', clearKey: { '60dc692e64ea443a8fb5ac186c865a9b': '01bdbe22d59b2a4504b53adc2f606cc1' }, category: "MOVIES" }, { name: 'IBC13', logo: 'https://static.wikia.nocookie.net/tv5network/images/6/62/IBC.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/ibc13_sd.mpd', clearKey: { '04e292bc99bd4ccba89e778651914254': 'ff0a62bdf8920ce453fe680330b563a5' }, category: "NEWS" }, { name: 'PTV4', logo: 'https://static.wikia.nocookie.net/russel/images/e/ed/PTV_4_Logo_June_2017.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_ptv4_sd.mpd', clearKey: { '71a130a851b9484bb47141c8966fb4a3': 'ad1f003b4f0b31b75ea4593844435600' }, category: "NEWS" }, { name: 'DepEd Channel', logo: 'https://static.wikia.nocookie.net/russel/images/f/f3/DepEd_TV_Logo_2020.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/depedch_sd.mpd', clearKey: { '0f853706412b11edb8780242ac120002': '2157d6529d80a760f60a8b5350dbc4df' }, category: "EDUCATIONAL" }, { name: 'Buko Channel', logo: 'https://static.wikia.nocookie.net/russel/images/2/2f/BuKo_Logo_2021.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_buko_sd.mpd', clearKey: { 'd273c085f2ab4a248e7bfc375229007d': '7932354c3a84f7fc1b80efa6bcea0615' }, category: "ENTERTAINMENT" }, { name: 'Knowledge Channel', logo: 'https://static.wikia.nocookie.net/russel/images/7/7c/Knowledge_Channel_Logo_2019.png' , type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_knowledgechannel.mpd', clearKey: { '0f856fa0412b11edb8780242ac120002': '783374273ef97ad3bc992c1d63e091e7' }, category: "EDUCATIONAL" }, { name: 'Bilyonaryo Channel', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBk6jgRNIPk88jGZNNbrChSRvzEFz71GtSQMDNRBmTNemdPf_DdVCnvjzB&s=10', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/bilyonaryoch.mpd', clearKey: { '227ffaf09bec4a889e0e0988704d52a2': 'b2d0dce5c486891997c1c92ddaca2cd2' }, category: "NEWS" }, { name: 'TVUP', logo: 'https://cms.cignal.tv/Upload/Thumbnails/TVUP%20Logo%20.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/tvup_prd.mpd', clearKey: { '83e813ccd4ca4837afd611037af02f63': 'a97c515dbcb5dcbc432bbd09d15afd41' }, category: "EDUCATIONAL" }, { name: 'TV Maria', logo: 'https://static.wikia.nocookie.net/russel/images/3/33/TV_Maria_Logo_2006.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/tvmaria_prd.mpd', clearKey: { 'fa3998b9a4de40659725ebc5151250d6': '998f1294b122bbf1a96c1ddc0cbb229f' }, category: "RELIGION" }, { name: 'True TV', logo: 'https://static.wikia.nocookie.net/logopedia/images/a/a0/TRUETV_Logo_2024.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/truefm_tv.mpd', clearKey: { '0559c95496d44fadb94105b9176c3579': '40d8bb2a46ffd03540e0c6210ece57ce' }, category: "NEWS" }, { name: 'Teleradyo Serbisyo', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/TeleRadyo_Serbisyo_logo.svg/1200px-TeleRadyo_Serbisyo_logo.svg.png', type: 'mpegdash', manifestUri: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-teleradyo-dash-abscbnono/index.mpd', clearKey: { '47c093e0c9fd4f80839a0337da3dd876': '50547394045b3d047dc7d92f57b5fb33' }, category: "NEWS" }, { name: 'MYX', logo: 'https://assets-myxglobal.abs-cbn.com/wp-content/uploads/2022/07/MYX_New_Logo_Web1.png', type: 'hls', manifestUri: 'https://myxnola-abscbn-ono.amagi.tv/index.m3u8', category: "MUSIC" }, { name: 'TVN Premium', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Logo_tvN.svg/1200px-Logo_tvN.svg.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_tvnpre.mpd', clearKey: { 'e1bde543e8a140b38d3f84ace746553e': 'b712c4ec307300043333a6899a402c10' }, category: "ENTERTAINMENT" }, { name: 'RPTV', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/RPTV_%282024%29.svg', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cnn_rptv_prod_hd.mpd', clearKey: { '1917f4caf2364e6d9b1507326a85ead6': 'a1340a251a5aa63a9b0ea5d9d7f67595' }, category: "GENERAL" }, { name: 'UAAP Varsity', logo: 'https://static.wikia.nocookie.net/russel/images/2/2e/Varsity_Channel_Print_Logo_2021.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/cg_uaap_cplay_sd.mpd', clearKey: { '95588338ee37423e99358a6d431324b9': '6e0f50a12f36599a55073868f814e81e' }, category: "SPORTS" }, { name: 'PBA Rush', logo: 'https://upload.wikimedia.org/wikipedia/en/c/cd/PBA_Rush_logo.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_pbarush_hd1.mpd', clearKey: { '76dc29dd87a244aeab9e8b7c5da1e5f3': '95b2f2ffd4e14073620506213b62ac82' }, category: "SPORTS" }, { name: 'NBA TV Philippines', logo: 'https://static.wikia.nocookie.net/dxs/images/a/aa/NBA_TV_Philippines_Logo_2020.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/pl_nba.mpd', clearKey: { 'f36eed9e95f140fabbc88a08abbeafff': '0125600d0eb13359c28bdab4a2ebe75a' }, category: "SPORTS" }, { name: 'One Sports+', logo: 'https://static.wikia.nocookie.net/tvfanon6528/images/5/58/One_Sports%2B_%282020-.n.v.%29.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_onesportsplus_hd1.mpd', clearKey: { '322d06e9326f4753a7ec0908030c13d8': '1e3e0ca32d421fbfec86feced0efefda' }, category: "SPORTS" }, { name: 'One PH', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/OnePHCignal.svg/1200px-OnePHCignal.svg.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/oneph_sd.mpd', clearKey: { '92834ab4a7e1499b90886c5d49220e46': 'a7108d9a6cfcc1b7939eb111daf09ab3' }, category: "NEWS" }, { name: 'One Sports', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/One_Sports_logo.svg/1200px-One_Sports_logo.svg.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_onesports_hd.mpd', clearKey: { '53c3bf2eba574f639aa21f2d4409ff11': '3de28411cf08a64ea935b9578f6d0edd' }, category: "SPORTS" }, { name: 'One News', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/OneNewsPH_logo.svg/1200px-OneNewsPH_logo.svg.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/onenews_hd1.mpd', clearKey: { 'd39eb201ae494a0b98583df4d110e8dd': '6797066880d344422abd3f5eda41f45f' }, category: "NEWS" }, { name: 'TAP TV', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/94/TapTV-ph.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_taptv_sd.mpd', clearKey: { 'f6804251e90b4966889b7df94fdc621e': '55c3c014f2bd12d6bd62349658f24566' }, category: "ENTERTAINMENT" }, { name: 'Tap Edge', logo: 'https://static.wikia.nocookie.net/russel/images/5/57/TAP_Edge_Logo_November_2020.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_tapedge.mpd', clearKey: { '0f854034412b11edb8780242ac120002': 'af8ad1c5e3f2e1b751a4f64608f24275' }, category: "MOVIES" }, { name: 'Tap Sports', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6e/TAP_Sports_channel_logo.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tapsports.mpd', clearKey: { 'eabd2d95c89e42f2b0b0b40ce4179ea0': '0e7e35a07e2c12822316c0dc4873903f' }, category: "SPORTS" }, { name: 'Tap Movies', logo: 'https://static.wikia.nocookie.net/russel/images/c/cb/TAP_Movies_Logo_2021.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_popupppvhd.mpd', clearKey: { '286e1c2d622c4c73b5c3d72e4a848abd': 'b7fad67599c1ce3c2fbc9d02b901be05' }, category: "MOVIES" }, { name: 'Tap Action Flix', logo: 'https://static.wikia.nocookie.net/russel/images/b/b3/TAP_Action_Flix_Logo_2021.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapactionflix_hd1.mpd', clearKey: { 'bee1066160c0424696d9bf99ca0645e3': 'f5b72bf3b89b9848de5616f37de040b7' }, category: "ACTION + CRIME" }, { name: 'CCTV4', logo: 'https://images.now-tv.com/shares/channelPreview/img/en_hk/color/ch542_170_122', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cctv4.mpd', clearKey: { 'b83566836c0d4216b7107bd7b8399366': '32d50635bfd05fbf8189a0e3f6c8db09' }, category: "NEWS" }, { name: 'Arirang Korea', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Arirang_logo.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/arirang_sd.mpd', clearKey: { '13815d0fa026441ea7662b0c9de00bcf': '2d99a55743677c3879a068dd9c92f824' }, category: "NEWS" }, { name: 'BBC Earth', logo: 'https://cms.bbcstudiossocial.com//sites/default/files/2023-03/bbce%20logo.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_bbcearth_hd1.mpd', clearKey: { '34ce95b60c424e169619816c5181aded': '0e2a2117d705613542618f58bf26fc8e' }, category: "NATURE + ANIMAL" }, { name: 'Discovery Channel', logo: 'https://eu1-prod-images.disco-api.com/2023/06/14/58a9ef27-9b7b-3245-bb2a-f95d57bd2cac.png?bf=0&f=png&p=true&q=60&w=360', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_discovery.mpd', clearKey: { 'd9ac48f5131641a789328257e778ad3a': 'b6e67c37239901980c6e37e0607ceee6' }, category: "EDUCATIONAL" }, { name: 'KBS World', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/KBS_World_%282009%29.svg', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_kbsworld.mpd', clearKey: { '22ff2347107e4871aa423bea9c2bd363': 'c6e7ba2f48b3a3b8269e8bc360e60404' }, category: "ENTERTAINMENT" }, { name: 'Kix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/KIX_logo.svg', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd', clearKey: { 'a8d5712967cd495ca80fdc425bc61d6b': 'f248c29525ed4c40cc39baeee9634735' }, category: "ACTION + CRIME" }, { name: 'Lifetime', logo: 'https://support.mylifetime.com/hc/theming_assets/01HZPHW782THXE9490P68PAPZP', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_lifetime.mpd', clearKey: { 'cf861d26e7834166807c324d57df5119': '64a81e30f6e5b7547e3516bbf8c647d0' }, category: "LIFESTYLE + FOOD" }, { name: 'HGTV', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/HGTV_2010.svg', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/hgtv_hd1.mpd', clearKey: { 'f0e3ab943318471abc8b47027f384f5a': '13802a79b19cc3485d2257165a7ef62a' }, category: "LIFESTYLE + FOOD" }, { name: 'Asian Food Network', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Asian_Food_Network.svg', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/asianfoodnetwork_sd.mpd', clearKey: { '1619db30b9ed42019abb760a0a3b5e7f': '5921e47fb290ae263291b851c0b4b6e4' }, category: "LIFESTYLE + FOOD" }, { name: 'Travel Channel', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2018_Travel_Channel_logo.svg/640px-2018_Travel_Channel_logo.svg.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/travel_channel_sd.mpd', clearKey: { 'f3047fc13d454dacb6db4207ee79d3d3': 'bdbd38748f51fc26932e96c9a2020839' }, category: "LIFESTYLE + FOOD" }, { name: 'Tech Storm', logo: 'https://www.techstorm.tv/wp-content/uploads/2020/11/StackLogo_BrilliantAmaranth_still.png', type: 'mpegdash', manifestUri: 'https://cdn08jtedge.indihometv.com/dassdvr/133/techstorm/manifest.mpd', clearKey: { '69646b755f3130303030303030303030': 'e4a2359b05563399f1d9adfce641724a' }, category: "EDUCATIONAL" }, { name: 'Crime+Investigation', logo: 'https://www.crimeandinvestigation.nl/themes/custom/emea/images/logos/ci-logo.svg', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_crime_invest.mpd', clearKey: { '21e2843b561c4248b8ea487986a16d33': 'db6bb638ccdfc1ad1a3e98d728486801' }, category: "ACTION + CRIME" }, { name: 'Al Jazeera', logo: 'https://www.bworldonline.com/wp-content/uploads/2025/01/Al-Jazeera-Logo.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_aljazeera.mpd', clearKey: { '0f85362a412b11edb8780242ac120002': 'd643dfbbfca6dc64e7f58fd67ea4b7d5' }, category: "NEWS" }, { name: 'BBC World News', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/BBC_World_News_2022.svg/1200px-BBC_World_News_2022.svg.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/bbcworld_news_sd.mpd', clearKey: { 'f59650be475e4c34a844d4e2062f71f3': '119639e849ddee96c4cec2f2b6b09b40' }, category: "NEWS" }, { name: 'CNA', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Channel_NewsAsia_logo_%28shape_only%29.svg/220px-Channel_NewsAsia_logo_%28shape_only%29.svg.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_channelnewsasia.mpd', clearKey: { 'b259df9987364dd3b778aa5d42cb9acd': '753e3dba96ab467e468269e7e33fb813' }, category: "NEWS" }, { name: 'ABC Australia', logo: 'https://images.now-tv.com/shares/channelPreview/img/en_hk/color/ch561_170_122', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/dr_abc_aus.mpd', clearKey: { '389497f9f8584a57b234e27e430e04b7': '3b85594c7f88604adf004e45c03511c0' }, category: "NEWS" }, { name: 'SPOTV', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqyUl84dNMuI5e9aT3DGTC08DffDI_3cMZtQ&s', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd', clearKey: { 'ec7ee27d83764e4b845c48cca31c8eef': '9c0e4191203fccb0fde34ee29999129e' }, category: "SPORTS" }, { name: 'SPOTV2', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrD7b-5hv9H1z71hLyto83eOui8a3q-bjgcg&s', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd', clearKey: { '7eea72d6075245a99ee3255603d58853': '6848ef60575579bf4d415db1032153ed' }, category: "SPORTS" }, { name: 'Premier Sports ', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/PremierSports-ph.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_premiersports_hd1.mpd', clearKey: { 'fc19c98cb9504a0fb78b22fea0a4b814': 'ea683112a96d4ae6c32d4ea13923e8c7' }, category: "SPORTS" }, { name: 'Premier Sports 2', logo: 'https://static.wikia.nocookie.net/russel/images/9/9f/Premier_Sports_2_Logo_2022.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_premiertennishd.mpd', clearKey: { '59454adb530b4e0784eae62735f9d850': '61100d0b8c4dd13e4eb8b4851ba192cc' }, category: "SPORTS" }, { name: 'WWE Network', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/WWE_official_logo.svg/1200px-WWE_official_logo.svg.png', type: 'mpegdash', manifestUri: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2603/default_primary.mpd', clearKey: { '0cbc4d3b4fbd9af512acb2488bb42910': '30528c4ef882954e5707cd1001d66121' }, category: "SPORTS" }, { name: 'History', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/History_%282021%29.svg/800px-History_%282021%29.svg.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_historyhd.mpd', clearKey: { 'a7724b7ca2604c33bb2e963a0319968a': '6f97e3e2eb2bade626e0281ec01d3675' }, category: "EDUCATIONAL" }, { name: 'Animal Planet', logo: 'https://comcastadvertising.com/wp-content/uploads/2021/09/Animal-Planet-White-Small.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_animal_planet_sd.mpd', clearKey: { '436b69f987924fcbbc06d40a69c2799a': 'c63d5b0d7e52335b61aeba4f6537d54d' }, category: "NATURE + ANIMAL" }, { name: 'Fashion TV', logo: 'https://pune.ftvtalentagency.in/img/ftv-white-logo.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_fashiontvhd.mpd', clearKey: { '971ebbe2d887476398e97c37e0c5c591': '472aa631b1e671070a4bf198f43da0c7' }, category: "LIFESTYLE + FOOD" }, { name: 'Food Network', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Food_Network_logo.svg/1200px-Food_Network_logo.svg.png', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_foodnetwork_hd1.mpd', clearKey: { 'b7299ea0af8945479cd2f287ee7d530e': 'b8ae7679cf18e7261303313b18ba7a14' }, category: "LIFESTYLE + FOOD" }, { name: 'Bloomberg', logo: 'https://static.wikia.nocookie.net/logopedia/images/c/cb/Bloomberg.svg', type: 'mpegdash', manifestUri: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/bloomberg_sd.mpd', clearKey: { 'ef7d9dcfb99b406cb79fb9f675cba426': 'b24094f6ca136af25600e44df5987af4' }, category: "NEWS" },
];
const TMDB_API_KEY = 'db4c42c9c736e876660ea34369102156'; const TMDB_BASE_URL = 'https://api.themoviedb.org/3'; const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/'; const TMDB_LOGO_URL = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg';

// --- DOM Elements ---
const bodyElement = document.body; const mainContainer = document.getElementById('mainContainer'); const homeSection = document.getElementById('homeSection'); const plusPage = document.getElementById('plusPage'); const categoriesPage = document.getElementById('categoriesPage'); const categoryPillsContainer = document.getElementById('categoryPillsContainer'); const featureSliderSection = document.getElementById('featureSliderSection'); const featureSlider = document.getElementById('featureSlider'); const topChannelsRow = document.getElementById("topChannelsRow"); const homeTrendingRow = document.getElementById("homeTrendingRow");
const tmdbNowPlayingMoviesRow = document.getElementById('tmdbNowPlayingMoviesRow');
const tmdbTopRatedMoviesRow = document.getElementById('tmdbTopRatedMoviesRow');
const tmdbAiringTodayTVRow = document.getElementById('tmdbAiringTodayTVRow');
const tmdbTopRatedTVRow = document.getElementById('tmdbTopRatedTVRow');
const categoryGroups = document.getElementById("categoryGroups"); const playerContainer = document.getElementById('playerContainer'); const playerBoxExpanded = document.getElementById('playerBoxExpanded'); const playerBarMinimized = document.getElementById('playerBarMinimized'); const shakaVideoElement = document.getElementById('shaka-player'); const shakaPlayerContainer = document.getElementById('shaka-player-container'); const playerTitleExpanded = document.getElementById('playerTitleExpanded'); const playerSubExpanded = document.getElementById('playerSubExpanded'); const playerLiveIconExpanded = document.getElementById('playerLiveIconExpanded'); const minimizedLogo = document.getElementById('minimizedLogo'); const minimizedTitle = document.getElementById('minimizedTitle'); const searchModal = document.getElementById("searchModal"); const searchInput = document.getElementById("searchInput"); const searchResultsModal = document.getElementById("searchResultsModal"); const searchLoadingIndicator = searchResultsModal.querySelector('.loading-text');
const logoLink = document.querySelector('a.logo');
const mobileSearchBtn = document.getElementById("searchBtn");
const mobileProfileBtn = document.getElementById("profileBtn");
const desktopSearchBtn = document.getElementById("desktopNavSearch");
const desktopProfileBtn = document.getElementById("desktopNavProfile");
const desktopNavHome = document.getElementById('desktopNavHome');
const desktopNavStream = document.getElementById('desktopNavStream');
const desktopNavCategories = document.getElementById('desktopNavCategories');
const desktopVerticalNavItems = document.querySelectorAll('.desktop-vertical-nav .desktop-vertical-nav-item[data-target-page]');
const footerNav = document.querySelector('.footer-nav'); const footerItems = document.querySelectorAll('.footer-item[role="tab"]'); const tabPanels = document.querySelectorAll('[role="tabpanel"]');
const profileMenu = document.getElementById("profileMenu");
// const signInBtn = document.getElementById("signInBtn"); // Removed
const facebookLink = document.getElementById("facebookLink"); const aboutBtn = document.getElementById("aboutBtn");
const playerBackLandscapeBtn = document.getElementById('playerBackLandscapeBtn'); const playerInfoOverlay = document.getElementById('playerInfoOverlay'); const playerOverlayLogo = document.getElementById('playerOverlayLogo'); const playerOverlayChannelName = document.getElementById('playerOverlayChannelName'); const playerOverlayCategoryText = document.getElementById('playerOverlayCategoryText');
const homeTrendingTodayBtn = document.getElementById('homeTrendingTodayBtn');
const homeTrendingWeekBtn = document.getElementById('homeTrendingWeekBtn');

// --- UTILITY FUNCTIONS ---
function slugify(text) {
    if (!text) return '';
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[+&]/g, 'and')        // Replace + and & with 'and'
        .replace(/[^\w-]+/g, '')       // Remove all non-word chars except hyphen
        .replace(/--+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}
function getChannelBySlug(slug) { return streams.find(s => slugify(s.name) === slug); }
function getCategoryByName(name) { // For finding the original category name from a slug if needed
    const categories = ["ALL", ...new Set(streams.map(s => s.category || "UNCATEGORIZED"))];
    return categories.find(cat => slugify(cat) === slugify(name));
}

// --- ROUTING ---
function updateUrlAndTitle(newRelativePath, pageTitle, historyStateData) {
    const fullPath = basePath + (newRelativePath.startsWith('/') ? newRelativePath : '/' + newRelativePath);
    const currentFullPath = window.location.pathname + window.location.search + window.location.hash;

    if (currentFullPath !== fullPath) {
        history.pushState(historyStateData, pageTitle, fullPath);
    } else {
        // If path is same, still update title if different, and replace state if data needs update
        if (document.title !== pageTitle) {
            document.title = pageTitle;
        }
        history.replaceState(historyStateData, pageTitle, fullPath); // Replace to update state data if needed
    }
    if (document.title !== pageTitle) document.title = pageTitle;
}


async function handleRouteChange() {
    // Close modals/player before processing route
    if (isPlayerActive) await closePlayerCompletely(null, true); // Pass true to prevent URL change from closePlayer
    closeSearchModal();
    closeProfileMenu();

    let relativePath = window.location.pathname;
    if (relativePath.startsWith(basePath)) {
        relativePath = relativePath.substring(basePath.length);
    }
    if (!relativePath.startsWith('/')) {
        relativePath = '/' + relativePath;
    }
    if (relativePath === '/') relativePath = '/home'; // Default root to /home

    const segments = relativePath.split('/').filter(Boolean);
    const primaryRoute = segments[0];
    let targetPageId = 'homeSection'; // Default

    if (primaryRoute === 'home') {
        targetPageId = 'homeSection';
        if (segments[1] === 'top-channels' && segments[2]) {
            const channelSlug = segments[2];
            const channel = getChannelBySlug(channelSlug);
            if (channel) {
                _updateActiveUITab(targetPageId); // Activate home tab UI
                setTimeout(() => openPlayerChannel(channel), 50); // Open player after UI update
            } else console.warn("Channel not found for /home/top-channels route:", channelSlug);
        } else {
             _updateActiveUITab(targetPageId);
        }
    } else if (primaryRoute === 'stream') {
        targetPageId = 'plusPage';
        _updateActiveUITab(targetPageId);
    } else if (primaryRoute === 'live-tv') {
        targetPageId = 'categoriesPage';
        _updateActiveUITab(targetPageId); // Activate Live TV tab UI

        const categorySlug = segments[1];
        const channelSlug = segments[2];

        if (categoryPillsContainer.children.length === 0 || (categoryPillsContainer.children.length === 1 && categoryPillsContainer.querySelector('.loading-text'))) {
             renderCategoryPills(); // Ensure pills are rendered
             renderCategories(); // Render all categories initially
        }

        // Activate correct category pill
        let activeCategoryName = "ALL";
        document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
        if (categorySlug) {
            const pillToActivate = Array.from(categoryPillsContainer.querySelectorAll('.category-pill'))
                                       .find(p => slugify(p.dataset.category) === categorySlug);
            if (pillToActivate) {
                pillToActivate.classList.add('active');
                activeCategoryName = pillToActivate.dataset.category;
            } else { // Fallback to ALL if specific category slug not found
                const allPill = Array.from(categoryPillsContainer.querySelectorAll('.category-pill')).find(p => p.dataset.category === "ALL");
                if (allPill) allPill.classList.add('active');
            }
        } else { // No category slug, default to ALL
             const allPill = Array.from(categoryPillsContainer.querySelectorAll('.category-pill')).find(p => p.dataset.category === "ALL");
             if (allPill) allPill.classList.add('active');
        }
        renderCategories(activeCategoryName === "ALL" ? null : activeCategoryName);


        if (channelSlug) {
            const channel = getChannelBySlug(channelSlug);
            if (channel) {
                setTimeout(() => openPlayerChannel(channel), 50); // Open player
            } else console.warn("Channel not found for /live-tv route:", channelSlug);
        }
    } else { // Fallback for unknown routes
        console.warn("Unknown route, defaulting to home:", relativePath);
        targetPageId = 'homeSection';
        _updateActiveUITab(targetPageId);
        if (window.location.pathname !== basePath + '/home' && window.location.pathname !== basePath + '/') {
             history.replaceState({ page: 'homeSection' }, 'Home | flow+', basePath + '/home');
             document.title = 'Home | flow+';
        }
    }
    _displayCorrectPageContent(targetPageId);
}

function _displayCorrectPageContent(targetPageId) {
    tabPanels.forEach(panel => {
        panel.hidden = (panel.id !== targetPageId);
        panel.classList.toggle('active', panel.id === targetPageId);
    });
    if (featureSliderSection) {
        const isHomePage = (targetPageId === 'homeSection');
        const isDesktop = window.innerWidth >= 1024;
        if (isHomePage) {
            featureSliderSection.style.display = isDesktop ? "block" : "flex";
            startFeatureSliderInterval();
        } else {
            featureSliderSection.style.display = "none";
            if (featureSliderInterval) clearInterval(featureSliderInterval);
        }
    }
     if (targetPageId === 'categoriesPage' && (categoryPillsContainer.children.length === 0 || (categoryPillsContainer.children.length === 1 && categoryPillsContainer.querySelector('.loading-text')))) {
        renderCategoryPills();
        renderCategories();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function _updateActiveUITab(targetPageId) {
    // Mobile footer nav
    footerItems.forEach(item => {
        item.classList.toggle('selected', item.getAttribute('aria-controls') === targetPageId);
        item.setAttribute('aria-selected', (item.getAttribute('aria-controls') === targetPageId).toString());
    });
    // Desktop vertical nav
    desktopVerticalNavItems.forEach(item => {
        item.classList.toggle('active', item.dataset.targetPage === targetPageId);
    });
}

function switchTabAndUrl(targetPageId, clickedTabElement) {
    _updateActiveUITab(targetPageId);
    _displayCorrectPageContent(targetPageId);

    let newRelativePath = '';
    let pageTitle = 'flow+';
    let historyState = { page: targetPageId };

    if (targetPageId === 'homeSection') {
        newRelativePath = '/home';
        pageTitle = 'Home | flow+';
    } else if (targetPageId === 'plusPage') {
        newRelativePath = '/stream';
        pageTitle = 'Stream | flow+';
    } else if (targetPageId === 'categoriesPage') {
        const activePill = categoryPillsContainer.querySelector('.category-pill.active');
        if (activePill && activePill.dataset.category !== 'ALL') {
            const catSlug = slugify(activePill.dataset.category);
            newRelativePath = `/live-tv/${catSlug}`;
            pageTitle = `${activePill.dataset.category} | Live TV | flow+`;
            historyState.category = catSlug;
        } else {
            newRelativePath = '/live-tv';
            pageTitle = 'Live TV | flow+';
        }
    }
    updateUrlAndTitle(newRelativePath, pageTitle, historyState);
}


// --- Feature Slider Logic (no changes) ---
let featureIndex = 0; let featureSliderInterval = null; let slides = []; let features = [];
async function showTMDbDetails(id, mediaType) { const endpoint = `/${mediaType}/${id}`; const url = `${TMDB_BASE_URL}${endpoint}?api_key=${TMDB_API_KEY}&language=en-US`; try { const response = await fetch(url); if (!response.ok) { throw new Error(`HTTP error! Status: ${response.status}`); } const data = await response.json(); let details = `**${data.title || data.name}**\n\n`; details += `Type: ${mediaType === 'tv' ? 'TV Show' : 'Movie'}\n`; const releaseDate = data.release_date || data.first_air_date; if (releaseDate) { details += `Release: ${releaseDate}\n`; } if (data.vote_average) { details += `Rating: ${data.vote_average.toFixed(1)}/10\n`; } if (data.genres && data.genres.length > 0) { details += `Genres: ${data.genres.map(g => g.name).join(', ')}\n`; } details += `\nOverview:\n${data.overview || 'No overview available.'}`; alert(details); } catch (error) { console.error("Error fetching TMDb details:", error); alert("Could not fetch detailed information from TMDb."); } }
async function initializeFeatures() { if (!featureSlider) return; featureSlider.innerHTML = '<p class="loading-text">Loading features...</p>'; const dotsContainer = document.getElementById('featureDots'); if(dotsContainer) dotsContainer.innerHTML = ''; const manualStreamFeatures = [ { type: 'stream', bg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgOek7YTLGeHWVUGZqAy2y-fk-jKxxkqzVRL3EbyCtqoCLt5llMOaRJpr2&s=10", logo: '<img src="https://static.wikia.nocookie.net/abscbn/images/7/74/Kapamilya_Channel_3D_Logo.png" alt="Kapamilya Channel Logo"/>', title: "FPJ's Batang Quiapo", desc: "CATCH-UP TV", stream: streams.find(s => s.name === "Kapamilya Channel") }, { type: 'stream', bg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoMmUJBaL4yxreEkrsb_Tp9DCuGOgFVlJczFfZDUT-0lBB082vkneKgko&s=10", logo: '<img src="https://static.wikia.nocookie.net/tv5network/images/9/95/TV5_HD_2024.svg" alt="TV5 Logo"/>', title: "Totoy Bato", desc: "CATCH-UP TV", stream: streams.find(s => s.name === "TV5 HD") }, { type: 'stream', bg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYA9AXyW6r96mmNbCgaZ8eGoG2FIpyGBTz5ITH36zRblL7yySQQ2fDBMw&s=10", logo: '<img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/TeleRadyo_Serbisyo_logo.svg/1200px-TeleRadyo_Serbisyo_logo.svg.png" alt="Teleradyo Serbisyo Logo"/>', title: "Teleradyo Serbisyo", desc: "LIVE NEWS", stream: streams.find(s => s.name === "Teleradyo Serbisyo") } ].filter(f => f.stream); let tmdbFeatures = []; const trendingUrl = `${TMDB_BASE_URL}/trending/all/week?api_key=${TMDB_API_KEY}&language=en-US&page=1`; try { const response = await fetch(trendingUrl); if (!response.ok) throw new Error(`TMDb Trending fetch failed: ${response.status}`); const data = await response.json(); const trendingItems = data.results || []; let count = 0; const maxTmdbFeatures = 3; for (const item of trendingItems) { if (item.backdrop_path && count < maxTmdbFeatures) { let logoHtml = `<img src="${TMDB_LOGO_URL}" style="height:25px; width: auto;" alt="TMDb Logo">`; tmdbFeatures.push({ type: 'tmdb', bg: TMDB_IMAGE_BASE_URL + 'original' + item.backdrop_path, logo: logoHtml, title: item.title || item.name, desc: `TRENDING`, tmdbData: { ...item, linkUrl: `https://www.themoviedb.org/${item.media_type || (item.title ? 'movie' : 'tv')}/${item.id}` } }); count++; } } } catch (error) { console.error("Failed to fetch TMDb trending for features:", error); } features = [...manualStreamFeatures, ...tmdbFeatures].slice(0, 6); renderFeatureSlider(); }
function renderFeatureSlider() { if (!featureSlider) return; featureSlider.innerHTML = ''; slides = []; featureIndex = 0; const dotsContainer = document.createElement('div'); dotsContainer.className = 'feature-dots'; dotsContainer.id = 'featureDots'; if (features.length === 0) { featureSlider.innerHTML = '<p class="loading-text">No features to display.</p>'; return; } features.forEach((feature, index) => { const slide = document.createElement('div'); slide.className = 'feature-slide' + (index === featureIndex ? ' active' : ''); const bgUrl = feature.type === 'tmdb' && feature.tmdbData?.backdrop_path ? TMDB_IMAGE_BASE_URL + 'original' + feature.tmdbData.backdrop_path : feature.bg; slide.style.backgroundImage = `url('${bgUrl || ''}')`; slide.setAttribute('data-index', index); const overlay = document.createElement('div'); overlay.className = 'feature-overlay'; const content = document.createElement('div'); content.className = 'feature-content'; content.innerHTML = ` <div class="feature-logo">${feature.logo || ''}</div> <div class="feature-title">${feature.title || ''}</div> <div class="feature-desc">${feature.desc || ''}</div> `; slide.appendChild(overlay); slide.appendChild(content); featureSlider.appendChild(slide); slides.push(slide); const dot = document.createElement("span"); dot.className = "feature-dot" + (index === featureIndex ? " active" : ""); dot.onclick = (e) => { e.stopPropagation(); goToSlide(index); }; dotsContainer.appendChild(dot); }); if (slides.length > 0 && slides[featureIndex]) slides[featureIndex].classList.add('active'); if (dotsContainer.hasChildNodes()) featureSlider.appendChild(dotsContainer); startFeatureSliderInterval(); }
function goToSlide(index) { if (index === featureIndex || !slides.length) return; featureIndex = index; slides.forEach((slide, i) => { slide.classList.toggle('active', i === featureIndex); }); const currentDotsContainer = document.getElementById('featureDots'); if (currentDotsContainer) { const dots = currentDotsContainer.querySelectorAll('.feature-dot'); if (dots.length === slides.length) { dots.forEach((dot, i) => { dot.classList.toggle('active', i === featureIndex); }); } } startFeatureSliderInterval(); closeProfileMenu(); }
function startFeatureSliderInterval() { if (featureSliderInterval) clearInterval(featureSliderInterval); if (features.length <= 1) return; featureSliderInterval = setInterval(() => { goToSlide((featureIndex + 1) % features.length); }, 7000); }

// --- CONTENT RENDERING ---
function createChannelCard(stream, index, viewContext, categorySlugContext = null) {
    const card = document.createElement("div");
    card.className = "channel-card";
    card.style.setProperty('--logo-url', `url('${stream.logo}')`);
    card.innerHTML = ` <img src="${stream.logo}" alt="${stream.name}" loading="lazy"/> <span class="material-symbols-outlined channel-live-icon">sensors</span> `;
    card.onclick = () => navigateToPlayChannel(stream, viewContext, categorySlugContext);
    return card;
}
function createMovieCard(itemData) { const card = document.createElement("div"); card.className = "movie-card"; const imageUrl = itemData.img ? (itemData.img.startsWith('https://') || itemData.img.startsWith('http://') ? itemData.img : TMDB_IMAGE_BASE_URL + 'w500' + itemData.img) : 'https://via.placeholder.com/155x232/1a1a1a/444444?text=No+Image'; const linkUrl = itemData.linkUrl || itemData.url; card.innerHTML = `<img src="${imageUrl}" alt="${itemData.title}" loading="lazy"/>`; card.onclick = () => { if (linkUrl && linkUrl !== '#') { window.open(linkUrl, "_blank"); } else { alert(`More info soon for ${itemData.title}.`); } closeProfileMenu(); }; return card; }
function createRankedTrendingCard(itemData, rank) { const card = document.createElement("div"); card.className = "ranked-trending-card"; const imageUrl = itemData.img ? TMDB_IMAGE_BASE_URL + 'w342' + itemData.img : 'https://via.placeholder.com/140x210/1a1a1a/444444?text=N/A'; const linkUrl = itemData.linkUrl || '#'; card.innerHTML = ` <span class="rank-number">${rank}</span> <div class="rank-poster-container"> <img src="${imageUrl}" alt="${itemData.title}" loading="lazy"/> </div> `; card.onclick = () => { if (linkUrl && linkUrl !== '#') { window.open(linkUrl, "_blank"); } else { alert(`More info soon for ${itemData.title}.`); } closeProfileMenu(); }; return card; }
function renderTopChannels() { if (!topChannelsRow) return; topChannelsRow.innerHTML = '<p class="loading-text">Loading channels...</p>'; if (streams && streams.length > 0) { topChannelsRow.innerHTML = ""; streams.slice(0, 12).forEach((stream, index) => { topChannelsRow.appendChild(createChannelCard(stream, index, 'home-top-channels')); }); } else { topChannelsRow.innerHTML = '<p class="loading-text">No channels available.</p>'; } }
function renderHomeTrending(period = 'day') { if (!homeTrendingRow) return; fetchTMDbData(`/trending/all/${period}`, homeTrendingRow, 10, 'ranked');}
const categoryOrder = ["ALL", "GENERAL", "NEWS", "MOVIES", "ENTERTAINMENT", "SPORTS", "KIDS", "LIFESTYLE + FOOD", "EDUCATIONAL", "NATURE + ANIMAL", "MUSIC", "RELIGION", "OVERSEAS", "ACTION + CRIME"]; const categoryIcons = { "ALL": "apps", "GENERAL": "tv_gen", "NEWS": "feed", "MOVIES": "movie", "ENTERTAINMENT": "theater_comedy", "SPORTS": "sports_soccer", "KIDS": "child_care", "LIFESTYLE + FOOD": "nightlife", "EDUCATIONAL": "school", "NATURE + ANIMAL": "pets", "MUSIC": "music_note", "RELIGION": "church", "OVERSEAS": "public", "ACTION + CRIME": "bolt", "UNCATEGORIZED": "category" }; function getIconForCategory(categoryName) { return categoryIcons[categoryName.toUpperCase().replace(/ /g, '_')] || categoryIcons["UNCATEGORIZED"]; }

function renderCategoryPills() {
    if (!categoryPillsContainer) return;
    categoryPillsContainer.innerHTML = '';
    const uniqueCategories = ["ALL", ...new Set(streams.map(s => s.category || "UNCATEGORIZED"))];
    const sortedUniqueCategories = uniqueCategories.sort((a, b) => { const indexA = categoryOrder.indexOf(a.toUpperCase()); const indexB = categoryOrder.indexOf(b.toUpperCase()); if (a === "ALL") return -1; if (b === "ALL") return 1; if (indexA !== -1 && indexB !== -1) return indexA - indexB; if (indexA !== -1) return -1; if (indexB !== -1) return 1; return a.localeCompare(b); });

    sortedUniqueCategories.forEach(catName => {
        const pill = document.createElement('button');
        pill.className = 'category-pill';
        pill.dataset.category = catName;
        pill.innerHTML = `<span class="material-symbols-outlined">${getIconForCategory(catName)}</span> ${catName}`;

        pill.onclick = () => {
            document.querySelectorAll('.category-pill.active').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            renderCategories(catName === "ALL" ? null : catName);

            const catSlug = slugify(catName);
            const newPath = (catName === "ALL") ? '/live-tv' : `/live-tv/${catSlug}`;
            const pageTitle = (catName === "ALL") ? 'Live TV | flow+' : `${catName} | Live TV | flow+`;
            updateUrlAndTitle(newPath, pageTitle, { page: 'categoriesPage', category: catSlug });
        };
        categoryPillsContainer.appendChild(pill);
    });
}

function renderCategories(filterCategory = null) {
    if (!categoryGroups) return;
    categoryGroups.innerHTML = '<p class="loading-text">Loading categories...</p>';
    if (streams.length === 0) { categoryGroups.innerHTML = '<p class="loading-text">No channel data available.</p>'; return; }

    const streamsToRender = filterCategory ? streams.filter(s => (s.category || "UNCATEGORIZED") === filterCategory) : streams;
    const streamsByCategory = streamsToRender.reduce((acc, stream) => {
        const category = stream.category || "UNCATEGORIZED";
        if (!acc[category]) acc[category] = [];
        acc[category].push(stream);
        return acc;
    }, {});

    categoryGroups.innerHTML = "";
    const displayCategories = Object.keys(streamsByCategory).sort((a, b) => { const indexA = categoryOrder.indexOf(a.toUpperCase()); const indexB = categoryOrder.indexOf(b.toUpperCase()); if (indexA !== -1 && indexB !== -1) return indexA - indexB; if (indexA !== -1) return -1; if (indexB !== -1) return 1; return a.localeCompare(b); });

    if (displayCategories.length === 0 && filterCategory) {
        categoryGroups.innerHTML = `<p class="loading-text">No channels found for "${filterCategory}".</p>`;
        return;
    } else if (displayCategories.length === 0) {
         categoryGroups.innerHTML = `<p class="loading-text">No categories to display.</p>`;
        return;
    }

    displayCategories.forEach(cat => {
        const categoryStreams = streamsByCategory[cat];
        if (!categoryStreams || categoryStreams.length === 0) return;

        const groupDiv = document.createElement('div');
        groupDiv.className = 'category-group';
        const titleDiv = document.createElement('div');
        titleDiv.className = 'category-title';
        titleDiv.innerHTML = `<span class="material-symbols-outlined">${getIconForCategory(cat)}</span> ${cat.toUpperCase().replace(/_/g, ' ')}`;
        groupDiv.appendChild(titleDiv);

        const channelsDiv = document.createElement('div');
        channelsDiv.className = 'category-channels';
        categoryStreams.forEach((stream) => {
            channelsDiv.appendChild(createChannelCard(stream, streams.indexOf(stream), 'live-tv', slugify(cat)));
        });
        groupDiv.appendChild(channelsDiv);
        categoryGroups.appendChild(groupDiv);
    });
}

// --- PLAYER LOGIC ---
let shakaPlayer = null; let isPlayerActive = false; let currentPlayingChannelData = null; let shakaControlsObserver = null; function syncCustomControlsVisibility() { if (!shakaPlayerContainer || !playerContainer.classList.contains('fullscreen-active')) { playerContainer.classList.remove('controls-active'); return; } const shakaControls = shakaPlayerContainer.querySelector('.shaka-controls-container'); if (shakaControls && !shakaControls.classList.contains('shaka-controls-hidden')) { playerContainer.classList.add('controls-active'); } else { playerContainer.classList.remove('controls-active'); } } function setupShakaControlsObserver() { if (shakaControlsObserver) shakaControlsObserver.disconnect(); if (!shakaPlayerContainer) return; const shakaUIContainer = shakaPlayerContainer.querySelector('.shaka-video-container'); if (!shakaUIContainer) { return; } shakaControlsObserver = new MutationObserver((mutationsList) => { for (const mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'class') { syncCustomControlsVisibility(); } } }); shakaControlsObserver.observe(shakaUIContainer, { attributes: true }); setTimeout(syncCustomControlsVisibility, 100); } async function initializeShakaPlayer(channel) { const manifestUri = channel.manifestUri; if (!manifestUri || manifestUri === "#") { alert(`Stream URL for ${channel.name} is not available.`); closePlayerCompletely(); return false; } const drmConfig = channel.clearKey && Object.keys(channel.clearKey).length > 0 ? { drm: { clearKeys: channel.clearKey } } : {}; if (typeof shaka === 'undefined') { closePlayerCompletely(); return false; } if (!shaka.Player.isBrowserSupported()) { closePlayerCompletely(); return false; } if (shakaPlayer) { try { await shakaPlayer.destroy(); } catch (e) { console.error('Error destroying previous player:', e); } shakaPlayer = null; } shakaPlayer = new shaka.Player(shakaVideoElement); shakaPlayer.configure(drmConfig); shakaPlayer.addEventListener('error', (event) => { alert(`Error loading stream: ${event.detail.message || event.detail.code}`); closePlayerCompletely(); }); try { await shakaPlayer.load(manifestUri); setupShakaControlsObserver(); try { await shakaVideoElement.play(); } catch (err) { console.warn("Autoplay prevented:", err); } return true; } catch (error) { if (error.code && shaka.util && shaka.util.Error && shaka.util.Error.Code && error.code === shaka.util.Error.Code.LOAD_INTERRUPTED) { console.warn("Load interrupted"); } else { alert(`Failed to load stream for ${channel.name}.`); closePlayerCompletely(); } return false; } }

function navigateToPlayChannel(channel, viewContext, categorySlugContext = null) {
    const channelSlug = slugify(channel.name);
    let newRelativePath = '';
    let pageTitle = `${channel.name} | Playing | flow+`;
    let historyStateData = {
        page: 'player', // Generic state for player
        channelSlug: channelSlug,
        channelName: channel.name
    };

    if (viewContext === 'home-top-channels') {
        newRelativePath = `/home/top-channels/${channelSlug}`;
        historyStateData.context = 'home/top-channels';
    } else if (viewContext === 'live-tv' && categorySlugContext) {
        newRelativePath = `/live-tv/${categorySlugContext}/${channelSlug}`;
        historyStateData.context = `live-tv/${categorySlugContext}`;
    } else {
        console.error("Unknown context for playing channel:", viewContext, categorySlugContext);
        // Fallback: could navigate to a generic play path or do nothing
        return;
    }
    updateUrlAndTitle(newRelativePath, pageTitle, historyStateData);
    openPlayerChannel(channel); // Open player after URL is set
}

async function openPlayerChannel(channelData) {
    if (!playerContainer || !channelData) return;
    currentPlayingChannelData = channelData;
    playerTitleExpanded.textContent = channelData.name || 'Live Stream'; playerSubExpanded.textContent = channelData.category || 'Channel'; playerLiveIconExpanded.style.display = 'inline-block'; playerOverlayLogo.src = channelData.logo || 'https://i.ibb.co/Gf4NpsN3/Adobe-Express-file-2.png'; playerOverlayChannelName.textContent = channelData.name || 'Live Stream'; playerOverlayCategoryText.textContent = channelData.category || 'Channel'; minimizedTitle.textContent = channelData.name || 'Live Stream'; minimizedLogo.src = channelData.logo || 'https://media-hosting.imagekit.io/5c573f92b4d54110/f15d421b-2279-40e7-abd0-86a70be0008a.png?Expires=1841661533&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ddSLSTxHIKUGvrWX8h2tby6vgkfXlo78QCd3zYCuxCzL2dkFUXGqGhphTRd6MnGUUIaSC4LGABS5QiiAQ4EqtqaFbFQDVuMIpWYvAAei4-ZQfY0g1gCWtHUA3x626Hcm6sQ7evLdh-A4U8d8tEE1EOd~mPdlAc9Vvclk92oFUKBsh0-u2smfvk9G7WDpdA7KpeC342UY9w1YK4LZm0-S0u-Sf~ZSaxYwLh20KtiTwlVVZ4932ubXn4sVoOLufbAlJOI~39LSDG8RhlZiKtCOO-fAgjTDWGf5Np-ohsdBe2EqQ0z6fygNaYZIdyo1coLPhHbLcbr4BXwFxdJTYX-vPw__';
    closeProfileMenu();

    const playerInitialized = await initializeShakaPlayer(channelData);
    if (playerInitialized) {
        isPlayerActive = true;
        playerContainer.classList.add('expanded'); playerContainer.classList.remove('minimized'); bodyElement.classList.remove('player-minimized-active');
        try {
            if (shakaPlayerContainer.requestFullscreen) await shakaPlayerContainer.requestFullscreen();
            else if (shakaPlayerContainer.webkitRequestFullscreen) await shakaPlayerContainer.webkitRequestFullscreen();
            else if (shakaPlayerContainer.msRequestFullscreen) await shakaPlayerContainer.msRequestFullscreen();
            playerContainer.classList.add('fullscreen-active'); syncCustomControlsVisibility();
        } catch (err) { console.warn("Fullscreen request failed:", err); playerContainer.classList.remove('fullscreen-active'); }
    } else {
        isPlayerActive = false; currentPlayingChannelData = null; playerContainer.classList.remove('expanded', 'minimized', 'fullscreen-active', 'controls-active'); bodyElement.classList.remove('player-minimized-active'); playerLiveIconExpanded.style.display = 'none';
        // If player init fails, navigate back to a safe URL (e.g., parent path)
        const currentPathSegments = window.location.pathname.substring(basePath.length).split('/').filter(Boolean);
        if (currentPathSegments.length > 1) { // Check if it's a "deep" channel URL
            const parentPath = '/' + currentPathSegments.slice(0, -1).join('/');
            history.replaceState({}, '', basePath + parentPath); // Use replaceState to not pollute history
            handleRouteChange(); // Re-evaluate the parent route
        }
    }
}
async function expandPlayer() { if (!isPlayerActive || !currentPlayingChannelData) return; playerContainer.classList.add('expanded'); playerContainer.classList.remove('minimized'); bodyElement.classList.remove('player-minimized-active'); try { if (shakaPlayerContainer.requestFullscreen) { await shakaPlayerContainer.requestFullscreen(); } else if (shakaPlayerContainer.webkitRequestFullscreen) { await shakaPlayerContainer.webkitRequestFullscreen(); } else if (shakaPlayerContainer.msRequestFullscreen) { await shakaPlayerContainer.msRequestFullscreen(); } playerContainer.classList.add('fullscreen-active'); syncCustomControlsVisibility(); } catch (err) { console.warn("Fullscreen on expand failed:", err); playerContainer.classList.remove('fullscreen-active'); } if (shakaVideoElement.paused) { shakaVideoElement.play().catch(e => console.warn("Play on expand failed:", e)); } }
function minimizePlayer() { if (!isPlayerActive || !playerContainer) return; if (document.fullscreenElement) { document.exitFullscreen().catch(err => console.warn("Exit fullscreen error:", err)); } playerContainer.classList.remove('fullscreen-active', 'controls-active'); playerContainer.classList.remove('expanded'); playerContainer.classList.add('minimized'); bodyElement.classList.add('player-minimized-active'); }
if (playerBackLandscapeBtn) playerBackLandscapeBtn.onclick = minimizePlayer;
document.addEventListener('fullscreenchange', () => { if (!document.fullscreenElement && playerContainer.classList.contains('fullscreen-active')) { playerContainer.classList.remove('fullscreen-active', 'controls-active'); } else if (document.fullscreenElement && !playerContainer.classList.contains('fullscreen-active')) { playerContainer.classList.add('fullscreen-active'); syncCustomControlsVisibility(); } });

async function closePlayerCompletely(event = null, calledInternally = false) {
    if (event) event.stopPropagation();
    if (!isPlayerActive && !calledInternally) return; // Avoid acting if already closed unless forced

    const wasActive = isPlayerActive; // Store if player was truly active before this call
    isPlayerActive = false; // Set early to prevent race conditions or re-entry

    if (document.fullscreenElement) {
        try { await document.exitFullscreen(); }
        catch (err) { console.warn("Exit fullscreen error on close:", err); }
    }

    playerContainer.classList.remove('expanded', 'minimized', 'fullscreen-active', 'controls-active');
    bodyElement.classList.remove('player-minimized-active');

    if (shakaPlayer) {
        try {
            shakaVideoElement.pause(); shakaVideoElement.src = '';
            shakaVideoElement.poster = "https://media-hosting.imagekit.io/5c573f92b4d54110/f15d421b-2279-40e7-abd0-86a70be0008a.png?Expires=1841661533&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ddSLSTxHIKUGvrWX8h2tby6vgkfXlo78QCd3zYCuxCzL2dkFUXGqGhphTRd6MnGUUIaSC4LGABS5QiiAQ4EqtqaFbFQDVuMIpWYvAAei4-ZQfY0g1gCWtHUA3x626Hcm6sQ7evLdh-A4U8d8tEE1EOd~mPdlAc9Vvclk92oFUKBsh0-u2smfvk9G7WDpdA7KpeC342UY9w1YK4LZm0-S0u-Sf~ZSaxYwLh20KtiTwlVVZ4932ubXn4sVoOLufbAlJOI~39LSDG8RhlZiKtCOO-fAgjTDWGf5Np-ohsdBe2EqQ0z6fygNaYZIdyo1coLPhHbLcbr4BXwFxdJTYX-vPw__";
            if (shakaControlsObserver) shakaControlsObserver.disconnect();
            await shakaPlayer.unload(); await shakaPlayer.destroy();
        } catch (e) { console.error('Error closing/destroying player:', e); }
        finally { shakaPlayer = null; }
    } else {
        shakaVideoElement.pause(); shakaVideoElement.src = '';
        shakaVideoElement.poster = "https://media-hosting.imagekit.io/5c573f92b4d54110/f15d421b-2279-40e7-abd0-86a70be0008a.png?Expires=1841661533&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ddSLSTxHIKUGvrWX8h2tby6vgkfXlo78QCd3zYCuxCzL2dkFUXGqGhphTRd6MnGUUIaSC4LGABS5QiiAQ4EqtqaFbFQDVuMIpWYvAAei4-ZQfY0g1gCWtHUA3x626Hcm6sQ7evLdh-A4U8d8tEE1EOd~mPdlAc9Vvclk92oFUKBsh0-u2smfvk9G7WDpdA7KpeC342UY9w1YK4LZm0-S0u-Sf~ZSaxYwLh20KtiTwlVVZ4932ubXn4sVoOLufbAlJOI~39LSDG8RhlZiKtCOO-fAgjTDWGf5Np-ohsdBe2EqQ0z6fygNaYZIdyo1coLPhHbLcbr4BXwFxdJTYX-vPw__";
    }
    playerTitleExpanded.textContent = ''; playerSubExpanded.textContent = ''; playerLiveIconExpanded.style.display = 'none'; minimizedTitle.textContent = ''; minimizedLogo.src = ''; playerOverlayLogo.src = ''; playerOverlayChannelName.textContent = ''; playerOverlayCategoryText.textContent = '';
    currentPlayingChannelData = null;

    if (!calledInternally && wasActive) { // Only change URL if player was active and not called by router
        const currentPath = window.location.pathname.substring(basePath.length);
        const segments = currentPath.split('/').filter(Boolean);
        let parentPath = '/home';
        if (segments.length > 1 && (segments[0] === 'home' || segments[0] === 'live-tv')) {
            parentPath = '/' + segments.slice(0, -1).join('/');
        }

        const currentRelativePath = (window.location.pathname.startsWith(basePath) ? window.location.pathname.substring(basePath.length) : window.location.pathname) || '/';
        const targetRelativePath = parentPath.startsWith('/') ? parentPath : '/' + parentPath;

        if (currentRelativePath !== targetRelativePath && currentRelativePath !== targetRelativePath + '/') {
             history.pushState({}, '', basePath + parentPath);
             handleRouteChange();
        } else if (parentPath === '/home' && (currentRelativePath === '/' || currentRelativePath === '/home')) {
             // if parent is home and we are already at home, ensure UI reflects this (handleRouteChange does it)
             handleRouteChange();
        }
    }
}

// --- SEARCH & PROFILE (no URL changes for these modals/menus) ---
let searchDebounceTimer; const DEBOUNCE_DELAY = 400; async function searchTMDb(query) { const url = `${TMDB_BASE_URL}/search/multi?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`; try { const response = await fetch(url); if (!response.ok) throw new Error(`TMDb Search HTTP error! status: ${response.status}`); const data = await response.json(); return (data.results || []) .filter(item => (item.media_type === 'movie' || item.media_type === 'tv') && (item.poster_path || item.backdrop_path)) .map(item => ({ resultType: 'TMDb', title: item.title || item.name, img: item.poster_path || item.backdrop_path, id: item.id, media_type: item.media_type })); } catch (error) { console.error("Failed to search TMDb:", error); return []; } } function openSearchModal() { if (!searchModal || !searchInput || !searchResultsModal) return; searchModal.classList.add("active"); searchInput.value = ""; searchResultsModal.innerHTML = ""; searchLoadingIndicator.style.display = 'none'; setTimeout(() => searchInput.focus(), 150); searchModal.addEventListener('keydown', trapFocusInSearch); closeProfileMenu(); } function closeSearchModal() { if (!searchModal) return; searchModal.classList.remove("active"); searchResultsModal.innerHTML = ""; searchModal.removeEventListener('keydown', trapFocusInSearch); } function trapFocusInSearch(event) { if (event.key === 'Escape') { closeSearchModal(); return; } if (event.key !== 'Tab') return; const focusableElements = searchModal.querySelectorAll('input, button, [onclick], .search-result-card'); if (!focusableElements.length) return; const firstElement = focusableElements[0]; const lastElement = focusableElements[focusableElements.length - 1]; if (event.shiftKey) { if (document.activeElement === firstElement) { lastElement.focus(); event.preventDefault(); } } else { if (document.activeElement === lastElement) { firstElement.focus(); event.preventDefault(); } } } function handleSearchInput() { clearTimeout(searchDebounceTimer); const query = searchInput.value.trim().toLowerCase(); if (!query) { searchResultsModal.innerHTML = ""; searchLoadingIndicator.style.display = 'none'; return; } searchResultsModal.innerHTML = ""; searchLoadingIndicator.style.display = 'block'; searchDebounceTimer = setTimeout(async () => { let streamResults = streams .filter(s => s.name && s.name.toLowerCase().includes(query)) .map(s => ({ ...s, resultType: "Channel" })); let tmdbResults = await searchTMDb(query); let combinedResults = [...streamResults, ...tmdbResults].slice(0, 15); searchLoadingIndicator.style.display = 'none'; if (combinedResults.length === 0) { searchResultsModal.innerHTML = `<p class="loading-text">No results found for "${searchInput.value}".</p>`; return; } searchResultsModal.innerHTML = ""; combinedResults.forEach(r => { let cardHTML = '', onclickAction = null; const cardDiv = document.createElement('div'); cardDiv.className = 'search-result-card'; cardDiv.tabIndex = 0; switch (r.resultType) { case "Channel": const streamData = streams.find(s => s.name === r.name && s.logo === r.logo); if (streamData) { onclickAction = () => { navigateToPlayChannel(streamData, 'search-result'); closeSearchModal(); }; } cardHTML = `<img src="${r.logo || 'https://via.placeholder.com/50?text=No+Logo'}" alt="${r.name}"/><div class="search-result-info"><div class="search-result-title">${r.name}</div><div class="search-result-type">${r.resultType}</div></div>`; break; case "TMDb": const tmdbImageUrl = r.img ? TMDB_IMAGE_BASE_URL + 'w92' + r.img : 'https://via.placeholder.com/50x75/1a1a1a/444444?text=N/A'; const tmdbUrl = `https://www.themoviedb.org/${r.media_type}/${r.id}`; onclickAction = () => { window.open(tmdbUrl, '_blank'); closeSearchModal(); closeProfileMenu(); }; cardHTML = `<img src="${tmdbImageUrl}" alt="${r.title}" style="height:75px; width:50px; object-fit:cover;"/><div class="search-result-info"><div class="search-result-title">${r.title}</div><div class="search-result-type">${r.media_type === 'tv' ? 'TV Series' : 'Movie'} (TMDb)</div></div>`; break; default: cardHTML = `<div>Unknown result type</div>`; } cardDiv.innerHTML = cardHTML; if (onclickAction) { cardDiv.onclick = onclickAction; cardDiv.onkeydown = (e) => { if (e.key === 'Enter') onclickAction(); }; } searchResultsModal.appendChild(cardDiv); }); }, DEBOUNCE_DELAY); }
function toggleProfileMenu(event) { const triggerElement = event.currentTarget; if (!profileMenu || !triggerElement) return; profileMenu.classList.toggle('active'); triggerElement.classList.toggle('menu-active', profileMenu.classList.contains('active')); if (window.innerWidth >= 1024 && triggerElement.id === 'desktopNavProfile') { if (profileMenu.classList.contains('active')) { const rect = triggerElement.getBoundingClientRect(); profileMenu.classList.add('desktop-positioned'); profileMenu.style.top = `${rect.top}px`; profileMenu.style.left = `${rect.right + 10}px`; } else { profileMenu.classList.remove('desktop-positioned'); profileMenu.style.top = ''; profileMenu.style.left = ''; } } else if (window.innerWidth < 1024) { profileMenu.classList.remove('desktop-positioned'); profileMenu.style.top = ''; profileMenu.style.left = ''; } }
function closeProfileMenu() { if (profileMenu) { profileMenu.classList.remove('active'); profileMenu.classList.remove('desktop-positioned'); profileMenu.style.top = ''; profileMenu.style.left = ''; } if (mobileProfileBtn) mobileProfileBtn.classList.remove('menu-active'); if (desktopProfileBtn) desktopProfileBtn.classList.remove('menu-active'); }

function setupProfileMenuActions() {
    // Removed signInBtn related code
    if (facebookLink) facebookLink.onclick = () => { window.open('https://www.facebook.com/profile.php?id=61560926960219', '_blank'); closeProfileMenu(); };
    if (aboutBtn) aboutBtn.onclick = () => { alert('flow+\n\nYour simplified hub for live channels and streaming links.\n\nVersion: 2.5\nCreated by: flxw'); closeProfileMenu(); };
    
    if (mobileProfileBtn) mobileProfileBtn.onclick = toggleProfileMenu;
    if (desktopProfileBtn) desktopProfileBtn.onclick = toggleProfileMenu;

    document.addEventListener('click', (event) => {
        if (!profileMenu) return;
        const isClickInsideMenu = profileMenu.contains(event.target);
        const isClickOnMobileProfileBtn = mobileProfileBtn && mobileProfileBtn.contains(event.target);
        const isClickOnDesktopProfileBtn = desktopProfileBtn && desktopProfileBtn.contains(event.target);

        if (!isClickInsideMenu && !isClickOnMobileProfileBtn && !isClickOnDesktopProfileBtn && profileMenu.classList.contains('active')) {
            closeProfileMenu();
        }
    });

    // Ensure any item click within the profile menu closes it
    if (profileMenu) {
        profileMenu.addEventListener('click', (event) => {
            let targetItem = event.target;
            while (targetItem && targetItem !== profileMenu && !targetItem.classList.contains('profile-menu-item')) {
                targetItem = targetItem.parentElement;
            }
            if (targetItem && targetItem.classList.contains('profile-menu-item')) {
                closeProfileMenu();
            }
        });
    }
}

// --- TMDb Data Fetching ---
async function fetchTMDbData(endpoint, containerElement, limit = 12, cardType = 'standard') { if (!containerElement) { return; } const url = `${TMDB_BASE_URL}${endpoint}?api_key=${TMDB_API_KEY}&language=en-US&page=1`; containerElement.innerHTML = `<p class="loading-text">Loading...</p>`; try { const response = await fetch(url); if (!response.ok) { throw new Error(`HTTP error! status: ${response.status} for ${endpoint}`); } const data = await response.json(); const results = data.results; containerElement.innerHTML = ''; if (results && results.length > 0) { const limitedResults = results.slice(0, limit); let itemsAdded = 0; limitedResults.forEach((item, index) => { const imagePath = item.poster_path || item.backdrop_path; if (imagePath) { const cardData = { title: item.title || item.name, img: imagePath, id: item.id, media_type: item.media_type || (item.title ? 'movie' : 'tv'), linkUrl: `https://www.themoviedb.org/${item.media_type || (item.title ? 'movie' : 'tv')}/${item.id}` }; if (cardType === 'ranked') { containerElement.appendChild(createRankedTrendingCard(cardData, index + 1)); } else { containerElement.appendChild(createMovieCard(cardData)); } itemsAdded++; } }); if (itemsAdded === 0) { containerElement.innerHTML = `<p class="loading-text">No items with images found.</p>`; } } else { containerElement.innerHTML = `<p class="loading-text">No results found.</p>`; } } catch (error) { console.error(`Failed to fetch TMDb data for ${endpoint}:`, error); containerElement.innerHTML = `<p class="loading-text">Could not load data.</p>`; } }

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    if (typeof shaka !== 'undefined') { shaka.polyfill.installAll(); if (!shaka.Player.isBrowserSupported()) { console.warn('Browser not supported by Shaka Player.'); } } else { console.error("Shaka Player library not found!"); }

    // Handle GitHub Pages redirect for deep links
    if (sessionStorage.redirect) {
        const intendedPath = sessionStorage.redirect;
        delete sessionStorage.redirect;
        // Only replace if the current path (likely /flowplus.ph/ from 404 redirect)
        // is different from the intendedPath.
        if (window.location.pathname !== intendedPath) {
            history.replaceState(null, '', intendedPath);
        }
    }

    // Setup navigation event listeners
    if (logoLink) {
        logoLink.onclick = (e) => {
            e.preventDefault();
            const homePath = basePath + '/home';
            updateUrlAndTitle('/home', 'Home | flow+', { page: 'homeSection' });
            handleRouteChange();
            return false;
        };
    }
    if(mobileSearchBtn) mobileSearchBtn.onclick = openSearchModal;
    if(desktopSearchBtn) desktopSearchBtn.onclick = openSearchModal;
    if(searchInput) searchInput.oninput = handleSearchInput;

    // Desktop vertical nav clicks
    [desktopNavHome, desktopNavStream, desktopNavCategories].forEach(item => {
        if (item) {
            item.onclick = function() { switchTabAndUrl(this.dataset.targetPage, this); };
        }
    });

    setupProfileMenuActions();
    initializeFeatures();
    renderTopChannels();
    // Category pills and groups are rendered by handleRouteChange or switchTabAndUrl if categoriesPage is active

    // Trending and TMDb rows
    renderHomeTrending('day');
    if (homeTrendingTodayBtn && homeTrendingWeekBtn && homeTrendingRow) {
        homeTrendingTodayBtn.addEventListener('click', () => { renderHomeTrending('day'); homeTrendingTodayBtn.classList.add('active'); homeTrendingWeekBtn.classList.remove('active'); });
        homeTrendingWeekBtn.addEventListener('click', () => { renderHomeTrending('week'); homeTrendingWeekBtn.classList.add('active'); homeTrendingTodayBtn.classList.remove('active'); });
    }
    fetchTMDbData('/movie/now_playing', tmdbNowPlayingMoviesRow, 12, 'standard');
    fetchTMDbData('/movie/top_rated', tmdbTopRatedMoviesRow, 12, 'standard');
    fetchTMDbData('/tv/airing_today', tmdbAiringTodayTVRow, 12, 'standard');
    fetchTMDbData('/tv/top_rated', tmdbTopRatedTVRow, 12, 'standard');

    // Initial route handling
    window.addEventListener('popstate', handleRouteChange);
    handleRouteChange();

    // Expose globally needed functions if any (not ideal, but for legacy onclicks)
    window.expandPlayer = expandPlayer; window.minimizePlayer = minimizePlayer; window.closePlayerCompletely = closePlayerCompletely; window.closeSearchModal = closeSearchModal; window.goToSlide = goToSlide; window.closeProfileMenu = closeProfileMenu; window.showTMDbDetails = showTMDbDetails;
    window.switchTabAndUrl = switchTabAndUrl; // Expose the combined function for footer onclicks

    console.log("SPA Routing Initialized. Base path:", basePath);
});