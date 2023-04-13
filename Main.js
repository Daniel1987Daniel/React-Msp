import { FaArrowAltCircleUp } from "react-icons/fa"

const Main = () => {

  const toTop = () => {

    const toTop = document.querySelector(".to-Top")
    window.addEventListener("scroll", () => {
      if(window.pageYOffset > 100) {
        toTop.classList.add("active")
      } else {
        toTop.classList.remove("active")
      }
    })

  }

  return (
    <div id="all_msp_app">
      <div className="div_sections">
        <section>
          <h1 id="základné_úlohy">ZÁKLADNÉ ÚLOHY</h1>
          <p>
            Vážení občania,
            prostredníctvom internetovej stránky Mestskej polície Ružomberok, Vás chcem pozdraviť a zároveň aj informovať o vzniku, úlohách, činnosti a aktivitách Mestskej polície Ružomberok.
            Mestská polícia Ružomberok bola zriadená dňa 1. 7. 1992 Všeob. záv. nariadením mesta č. 4/1992 ako poriadkový útvar mesta, ktorý tvoril 21 policajtov. Činnosť mestských policajtov sa riadi zák. 564/1991 Zb. o obecnej polícii.
            Viac ako 20 rokov sídlila mestská polícia v budove mestského úradu. Od 12. novembra 2014 už vykonáva  svoju činnosť v novej budove na ulici A. Bernoláka 44 v Ružomberku. MsP má plánovaný počet 33 policajtov a 1 administratívneho referenta. Nepretržitú činnosť hliadok mestskej polície (24 hodín denne) zabezpečuje stála služba, ktorej výkon uľahčuje kamerový systém umiestnený v centre mesta.Verím, že Mestská polícia Ružomberok Vám svojou prácou pomôže cítiť sa bezpečnejšie v našom krásnom meste. Verím, že príslušníci mestskej polície Vám poradia a pomôžu v konkrétnych situáciách. Oslovte ich! Sme tu pre Vás! Dúfam, že aj Vy nám svojou spoluprácou pomôžete a pri každom podozrení z porušenia zákona zavoláte na bezplatnú telefónnu linku 159.
            Ing. Ivan Stromko
            Náčelník MsP Ružomberok
            Vaše komentáre, problémy, návrhy a sťažnosti posielajte na náš e-mail: msp@ruzomberok.sk
          </p>
          <a href="#zoznam_linkov" className="to-Top" onClick={toTop}>
            <FaArrowAltCircleUp />
          </a>
        </section>
        <div className="background-image"></div>
        <section>
          <h1 id="prevencia">PREVENCIA</h1>
          <p>
            Mesto Ružomberok prostredníctvom Mestskej polície prevádzkuje kamerový systém pozostávajúci z celkovo 50 kamier: 
            Umiestnenie kamerových bodov:
            Názov kamery a jej miestnenie:
            1. Stred - Otočná Križovatka ulíc Mostová - Podhora
            2. Stred – Podhora Podhora od Mostovej smerom ku knižnici
            3. Stred - Mostová Križovatka ulíc Mostová - Podhora
            4. Knižnica – Otočná /smer k OD Adria Tesco/
            5. Knižnica – Podhora /od knižnice do centra/
            6. Park Š. N. Hýroša  - Park Š. N. Hýroša
            7. Okresné riaditeľstvo PZ - Otočná, budova OR PZ RK
            8. Okresné riaditeľstvo PZ – M.Madáčova,  budova OR PZ RK
            9. Okresné riaditeľstvo PZ - K. Salvu, budova OR PZ RK
            10. ZŠ Dončova – /Bernoláka, Dončova/ Križovatka A. Bernoláka - Dončova
            11. ZŠ Dončova - Križovatka A. Bernoláka - Dončova
            12. ZŠ Dončova - ulica Dončova
            13. Synagóga -Ul. Panská, štrk. parkovisko
            14. Synagóga -Ul. Panská (smer do pešej zóny)
            15. Mauzóleum A. Hlinku - Mauzóleum A. Hlinku,
            16. Kostol - Priestor za farským kostolom
            17. Kostol – Lavičky - Lavičky za kostolom
            18. Tmavé schody - Tmavé schody
            19. Mestský úrad – vzadu  - parkovisko MsÚ
            20. Stanica - Parkovisko Hlavná stanica
            21. Stanica - vjazd - Parkovisko Hlavná stanica
            22. Zarevúca Križovatka ul. Zarevúca s ul. Plavisko
            23 Zarevúca - Poľná Križovatka s ul. Plavisko
            24. Cirkevné Gymnázium - budova Gymnázia sv. Andreja
            25. Madačova parkovisko - Parkovisko M. Madáčova
            26. Celprojekt 1- reštaurácia Tatra
            27. Celprojekt 2 - POŠTA reštaurácia Tatra
            28. Podhora Tesco  križovatka ulíc. Podhora – Mariánska
            29. Podhora – tržnica   - križovatka ulíc. Podhora – Mariánska
            30. Bjornsonov dom - Nám. Slobody
            31. Kuratórium - Križovatka ulíc Scota Viatora - ovažská
            32. Kuratórium Scota Viatora SSŠ OaS
            33. Kuratórium - vnútroblok Š. Moyzesa
            34. Gymnázium  križovatka ulíc Moyzesa – Šrobára
            35. Ačko –  Hrabovská, Makovického -  kruhový objazd  
            36. Ačko – kruhový objazd kruhový objazd
            37. Ačko - smer Hrabovo
            38. Hrabovo  - Parkovisko Hrabovo
            39. Hrabovo - vjazd - Parkovisko Hrabovo
            40. Hrabovo vrch parkoviska – smer Kalvária - Budova kabínkovej lanovky
            41. Klačno - Príjazdová cesta na Klačno
            42. Klačno – SKATEPARK - Areál skateparku
            43. Klačno cesta - Príjazdová cesta na Klačno
            44. Klačno – Park - oddychový park pred kostolom
            45. Klačno – Jazierko oddychový park pred kostolom
            46. Liptovská 1 - Strecha bytovka Liptovská 1
            47. Za dráhou 21 - strecha bytovky Za dráhou 21
            48. Bystrická cesta 46 - strecha bytovky Bystrická cesta 46
            49. City Market - Križovatka Poľná (smer do centra) – Za dráhou (pod nadjazd)
            50. City Market - Za dráhou
            51. City Market - Poľná - obch. centrum
            52. ZŠ Sládkovičova - Areál ZŠ Sládkovičova
            53. Hollého - Houdeka - Strecha mestskej bytovky
            54. Hollého - Plavisko - Strecha mestskej bytovky
            55. Hollého - vnútroblok - mestská bytovka
            56. Šport. hala T18 - parkovisko - Parkovisko pred vstupom do haly
            57. Šport. hala T18 - Plavisko - ulica Plavisko, pri priechode pre chodcov
            Prevádzkovateľ: Mesto Ružomberok – Mestská polícia Ružomberok
            Kontakt na zodpovednú osobu: msp@ruzomberok.sk
            Účel spracovania: ochrana verejných priestorov, občanov a návštevníkov mesta kamerovým systémom s obrazovým a zvukovým záznamom.
            Právny základ spracovania: spracúvanie je nevyhnutné pre plnenie úloh vo verejnom záujme v zmysle čl.6 ods. 1/e Nariadenia EU (GDPR) a §13 ods. 1/e Zákona 18/2018 Z. z..
            Doba uchovávania záznamu: 6 dní, záznam môže byť archivovaný aj na dlhšiu dobu pokiaľ si to účel spracovania bude vyžadovať, najmä v prípadoch trestnoprávnej zodpovednosti.
            Vaše práva: na prístup k osobným údajom, na vymazanie osobných údajov, na obmedzenie spracúvania osobných údajov, namietať spracúvanie osobných údajov, podať návrh na začatie konania podľa § 100 zákona č. 18/2018 Z. z.. Prevádzkovateľ má zákonnú povinnosť, na základe vyžiadania, poskytnúť záznamy z kamier subjektom, ­ktorým poskytnutie vyplýva zo zákona napr. súd, orgány činné v trestnom a priestupkovom ­konaní.
            Bližšie informácie o ochrane osobných údajov získate na kontaktnom mieste v priestore prevádzkovateľa alebo na:
            https://www.ruzomberok.sk/mestska-policia.html
          </p>
          
          <a href="#zoznam_linkov" className="to-Top" onClick={toTop}>
            <FaArrowAltCircleUp />
          </a>
        </section>
        <div className="background-image"></div>
        <section>
          <h1 id="nájdené_veci">NÁJDENÉ VECI</h1>
          <p>
            NEW YORKER <br />
            Vo štvrtok 23. februára 2023 bol vo večerných hodinách na zastávke MAD na Dončovej ulici (zastávka pri evanjelickom kostole) nájdený ruksak, bielo čiernej farby v tvare šachovnice s nápisom NEW YORKER. V ruksaku sa nachádzajú  krátke športové nohavice, tričko, mikina a tenisky.  Nájdený ruksak bol vzatý do úschovy na mestskú políciu, kde si ho môže majiteľ prísť  prevziať.
            <br />
            Zverejnené 24.2.2023 -rj- <br />
            <br />
            NÁJDENÝ RUKSAK <br />
            Dňa 24. Januára 2023 bol v čase o 17:45 hod. na útvar mestskej polície prinesený sivo červený ruksak "BAGLAND", ktorý bol nájdený na Námestí slobody pri Anima Cafe. V ruksaku sa nachádzali 2 páry šľapiek, plavecké okuliare modrej farby, dievčenské 2 dielne plávky a uterák. Vec uložená na mestskej polícii.
            <br />
            Zverejnené 27.1.2023 -rj- <br />
            <br />
            XIAOMI REDMI <br />
            Dňa 18. novembra 2022 bol v Ružomberku  na ulici Za kláštorom nájdený mobilný telefón značky Xiaomi Redmi modrej farby v silikónovom obale s držiakom na bicykel. Nájdený telefón bol vzatý do úschovy na útvar mestskej polície, kde si ho môže majiteľ prevziať.
            <br />
            Zverejnené 25.11.2022 -rj
          </p>
          <a href="#zoznam_linkov" className="to-Top" onClick={toTop}>
            <FaArrowAltCircleUp />
          </a>
        </section>
        <div className="background-image"></div>
        <section>
          <h1 id="odchyt_psov">ODCHYT PSOV</h1>
          <p>
            Odchyt psov - okrem plnenia úloh vyplývajúcich zo Zákona o obecnej polícii, Mestská polícia Ružomberok vykonáva odchyt zabehnutých, opustených a túlavých zvierat. Odchytené zvieratá sú umiestnené v Karanténnom zariadení v Bielom Potoku, kde prebehne ich základné ošetrenie (odčervenie, odblšenie, ...) a kde čakajú na adopciu. 
            Činnosť Karanténneho zariadenia v Bielom Potoku sa riadi vnútorným poriadkom a pre vrátenie psa majiteľovi je potrebné splniť podmienky stanovené karanténnym zariadením. 
            Podmienky vrátenia psa 
            Stratené a odchytené zviera možno z karanténneho zariadenia vydať jeho vlastníkovi za predpokladu, že jeho vlastníctvo hodnoverne dokáže. 
            Podmienkou uznania vlastníctva je: 
            - predloženie evidenčnej známky psa z obce, kde je pes registrovaný, alebo 
            - predloženie potvrdenky o zaplatení poplatku za psa, prípadne písomné potvrdenie obecného úradu o zaevidovaní psa
            - predloženie Očkovacieho preukazu, potvrdeného razítkom a podpisom veterinárneho lekára
            - pomocné dôkazy fotografie, opis psa a jeho výstroja a pod. 
            Pri vydaní psíka zamestnanec karanténneho zariadenia spíše s majiteľom psa Protokol o vrátení psa. 
            Podmienkou vydania psa po dokázaní vlastníctva je: 
            - podpísanie Protokolu o vrátení psa, 
            - psa možno vydať len osobe staršej ako 18 rokov
          </p>
          <br />
          <p>
            Kríženec odchytený 15. januára 2023 <br />
            Dňa 15. januára 2023 v čase okolo 16:15 hod. bol na ulici Tatranská cesta odchytený  kríženec čiernobielej farby. Odhadovaný vek šteniatka dva – tri mesiace. Pes nebol označený mikročipom, preto sa nepodarilo zistiť jeho  majiteľa a pes bol umiestnený v karanténnej stanici v Bielom Potoku.
            <br />
            Zverejnené 16.1.2023 -rj-
          </p>
          <a href="#zoznam_linkov" className="to-Top" onClick={toTop}>
            <FaArrowAltCircleUp />
          </a>
        </section>
        <div className="background-image"></div>
        <section>
          <h1 id="z_denníka_msp">Z DENNÍKA MsP</h1>
          <p>
            / 13. TÝŽDEŇ 2023 / 
            Večer vo štvrtok 30. marca sa na sídlisku Klačno uskutočnilo plánované cvičenie hasičov z Okresného riaditeľstva Hasičského a záchranného zboru v Ružomberku spolu s Mestskou políciou Ružomberok.
            V minulosti hasiči pri svojich výjazdoch na Klačne mali problém s prejazdnosťou niektorých ulíc, hoci vtedy použili menšie vozidlá. Na základe týchto skúseností  konštatovali, že v prípade požiaru a nutnosti nasadenia výškovej techniky a cisterien s vodou by jednoducho niektorými úsekmi neprešli. O svojom probléme informovali vedenie mestskej polície a to spolu s vedením mesta pristúpilo k vykonaniu cvičenia. 
            Keď spomíname cvičenie ako preventívnu akciu, tak počas neho nebola uložená ani jedna pokuta. Jej cieľom bolo to, aby si vodiči uvedomili dôležitosť ponechania dostatočne širokej príjazdovej cesty.  Keď pôjde o život a dôležitá je každá jedna sekunda, preparkovať jednoducho nestihnete. Pri zaparkovaní Vášho auta myslite na to, že ponechaním uličky širokej aspoň tri metre môžete zachrániť život. Vzhľadom na dĺžku hasičských vozidiel nechajte v zákrutách šírku aspoň štyri metre. Takisto neparkujte priamo pred vchodmi do bytových domov. Nielen kvôli hasičskej technike, ale aj kvôli možnej evakuácií obyvateľov.
            Podobné preventívne aktivity budú pokračovať aj na ostatných sídliskách a v mestských častiach, keďže  problémy s parkovaním sa týkajú celého mesta.
            Ďalším pokračovaním cvičenia bude to, že hliadky mestskej polície budú upozorňovať vodičov zle parkujúcich vozidiel umiestnením informačného letáku za stierač. 
            V súčasnej dobe začalo mesto intenzívne riešiť parkovaciu politiku na svojom území. Plánuje vyhotoviť pasport statickej dopravy a zistiť realitu o tom, aké vozidlá v meste parkujú, či ide o vozidlá rezidentov alebo o autá ľudí, ktorí v Ružomberku nemajú trvalé bydlisko, alebo či ide o služobné vozidlá a dodávky.
          </p>
          <a href="#zoznam_linkov" className="to-Top" onClick={toTop}>
            <FaArrowAltCircleUp />
          </a>
        </section>
        <div className="background-image"></div>
        <section>
          <h1 id="štruktúra">ŠTRUKTÚRA</h1>
          <p>
            <h4>Náčelník MsP</h4> 
            riadi činnosť MsP, na návrh primátora je menovaný a odvolávaný Mestským zastupiteľstvom
            <h4>Zástupca náčelníka MsP</h4>
            náčelníka v čase jeho neprítomnosti zastupuje ním poverený príslušník MsP. V obciach, kde je to účelné, môžu obecné (mestské) zastupiteľstvá na návrh primátora zriadiť funkciu stáleho zástupcu náčelníka. V Mestskej polícii Ružomberok je vytvorená funkcia zástupcu náčelníka MsP:
            <br />
            a) pre kontrolu a výkon služby
            <br />
            b) pre veci vnútorné a organizačné 
            <h4>Príslušník prevencie kriminality a vzdelávania MsP</h4>
            a) za svoju činnosť zodpovedá priamo náčelníkovi MP,
            <br />
            b) podieľa sa spolu s náčelníkom MP na vzdelávaní a školení príslušníkov MP,
            <br />
            c) vypracováva prevenčné programy a vykonáva aktivity súvisiace s prevenciou kriminality v meste,
            <br />
            d) v zmysle programu prevencie kriminality organizuje stretnutia (prednášky) s mládežou, 
            <br />
            e) má všetky právomoci a oprávnenia ako ostatní príslušníci MP,
            <br />
            f) plní aj ďalšie úlohy podľa pokynov náčelníka. 
            <br />
            <h4>Referent MsP</h4>
            administratívny pracovník, ktorý zabezpečuje okrem spracovania štatistických údajov aj vymáhanie pokút
            <h4>Oddelenie objasňovania priestupkov</h4>
            je tvorené spracovávateľmi priestupkov, ktorí objasňujú a spracovávajú zistené a oznámené priestupky a vedú evidenciu priestupkov a pošty
            <h4>Operačný príslušník</h4>
            prijíma oznámenia od občanov; vykonáva prvotné úkony potrebné pre začatie objasňovania priestupkov; podľa pokynov nadriadených riadi činnosť hliadok; pracuje v policajnom programe a vedie evidenciu pošty
            <h4>Veliteľ smeny</h4>
            podľa stanovených úloh riadi činnosť hliadok a zodpovedná za ich výkon
            <h4>Zástupca veliteľa smeny</h4>
            v neprítomnosti veliteľa smeny preberá zodpovednosť za činnosť a výkon hliadky
            <h4>Členovia hliadky</h4>
            podľa plánu kontrol a stanovených úloh vykonávajú hliadkovaciu činnosť
            <br />
            <br />
            <br />
            Zverejnené 15.5.2019 -rj-
          </p>
          <a href="#zoznam_linkov" className="to-Top" onClick={toTop}>
            <FaArrowAltCircleUp />
          </a>
        </section>
        <div className="background-image"></div>
        <section>
          <h1 id="informácie">INFORMÁCIE</h1>
          <p>
            <h4>Parkovanie na Klačne</h4>
            Od 1. decembra začne opäť platiť obmedzenie pre vodičov parkujúcich na sídlisku Klačno. Od začiatku decembra do konca marca budú v platnosti dopravné značky obmedzujúce parkovanie v stredu a vo štvrtok kvôli zimnej údržbe miestnych komunikácií. Obmedzenie sa týka celého sídliska, v spodnej časti ulice Klačno spájajúcej mesto s Černovou je zakázané parkovanie v stredu, na ostatných uliciach je to vo štvrtok, striedavo jedna časť v párny, druhá časť sídliska v nepárny týždeň a to v čase od 08:00 hod. do 10:00 hod. Upozorňujeme preto vodičov, aby parkovali v zmysle platného dopraného značenia.
            Na ďalší problém s parkovaním na sídlisku Klačno upozornili mestskú políciu hasiči, s ktorými spolupracovali pri otváraní bytov v predchádzajúcom príspevku. Tí uviedli, že ku vchodom s menším autom sa dostali len s problémami. V prípade požiaru bytoviek by sa kvôli zle parkujúcim vozidlám s výškovou technikou určite nedostali. Takýto problém je takmer na všetkých sídliskách, avšak na Klačne a v Baničnom je o to vypuklejší, že niektoré ulice sa nachádzajú v kopci a zle parkujúce sa vozidlá nie je možné obísť. Pokiaľ by chceli vysunúť rebrík potrebujú vďaka veľkej hmotnosti techniky pevný podklad a nie je možné ju využiť z trávnatej plochy. Z tohto dôvodu upozorňujeme vodičov, aby pri parkovaní brali do úvahy to, že počas zimy je zvýšené nebezpečenstvo požiaru spojené s používaním elektrotepelných spotrebičov ako aj manipuláciou s otvoreným ohňom. V neposlednom rade je potrebné brať ohľad na to, že zjazdnosť jednotlivých príjazdových komunikácií môže byť vďaka sneženiu a poľadovici oveľa zložitejšia ako zvyčajne. V najbližšom období sa teda mestskí policajti zamerajú na vodičov, ktorí svojimi vozidlami ohrozujú príjazd záchranných zložiek ku bytovkám.
            <br />
            <br />
            Zverejnené 3.12.2021 -rj-
          </p>
          <p>
            <h4>Cyklisti v pešej zóne</h4>
            Tí pozornejší návštevníci mesta si možno všimli zmenu na dopravných značkách označujúcich začiatok pešej zóny (od 01.06.2021). Ide v podstate o dodatkovú tabuľku pod značkou pešia zóna, kde sú podľa zákona uvedené vozidlá, ktorým je umožnený vjazd do pešej zóny. V zmysle aktuálneho značenia môžu do pešej zóny vojsť aj cyklisti už bez časového obmedzenia ako to bolo v minulosti. Musíme však pripomenúť, že v pešej zóne smú chodci používať cestu v celej šírke. Cyklisti majú vjazd povolený, nesmú pritom obmedziť ani ohroziť chodcov.
            Vedenie mesta chce takto vyjsť v ústrety žiadosti cyklistov, ktorí sa budú môcť bezpečne dostať z jedeného konca mesta na druhý tak, aby sa vyhli hlavným ťahom, kde je niekedy veľmi hustá premávka. Ale aj cyklisti si musia uvedomiť bezpečnosť chodcov, správať sa disciplinovane a ohľaduplne. K zmene dopravného značenia došlo zatiaľ len na skúšobnú dobu. Pokiaľ by dochádzalo k incidentom medzi chodcami a cyklistami, vráti sa dopravné značenie do pôvodného stavu. Tomu sa dá zabrániť pomalou jazdou. Vedenie mesta chce takisto touto cestou podporiť ochranu životného prostredia, podporiť ekologickú dopravu a znížiť počet motorových vozidiel v uliciach mesta.
            Veríme, že obidve skupiny účastníkov cestnej premávky sa budú navzájom rešpektovať a nedôjde medzi nimi ku kolíziám.
            <br />
            <br />
            Zverejnené 28.6.2021 -rj-
          </p>
          <p>
            <h4>Pult centrálnej ochrany</h4>
            Ponúkame možnosť zabezpečenia vašej nehnuteľnosti pripojením sa na pult centrálnej ochrany Mestskej polície Ružomberok. Existujúci, alebo nový zabezpečovací systém, sa pomocou Vami zvolenej technológie pripojí na naše monitorovacie stredisko - operačné parcovisko mestskej polície, kde je vykonávaná nepretržitá služba - 24 hod. denne. V prípade vlámania, alebo prepadu obsluhy v monitorovanom objekte je okamžite z operačného strediska vyslaná hliadka, ktorá je polohou najbližšie k predmetnému objektu. Túto informáciu získa stredisko zo systému GPS,ktoré je inštalované v každom vozidle hliadok MsP. Bližšie informácie podá zástupca náčelníka Bc. Tomáš Matejovie tel: 044 431 44 40, mobil: +421 0907 910 171, technickú časť zabezpečuje p. Libor Mach tel: +421 0905 209 204.
            <br />
            <br />
            Zverejnené 16.5.2019 -rj-
            <br />
            <br />
            Aktualizované 22.7.2022
          </p>
          <a href="#zoznam_linkov" className="to-Top" onClick={toTop}>
            <FaArrowAltCircleUp />
          </a>
        </section>
        <div className="background-image"></div>
        <section>
          <h1 id="história_msp">HISTÓRIA MsP</h1>
          <p>
            História MsP
            Polícia z latinského slova politia – „verejná správa", ktoré sa odvádza zo starogréckeho polis = mesto. Je to ozbrojená zložka štátu, určená hlavne na udržiavanie vnútorného poriadku štátu (na rozdiel od armády, ktorá chráni pred vonkajším nepriateľom), k ochrane práv, majetku a bezpečnosti občanov a ku stíhaniu páchateľov trestnej činnosti.
            Na Slovensku po zmene politického zriadenia v roku 1989 postupne jednotlivé kompetencie štátu prechádzajú do rúk samospráv.  Jednou zo základných úloh obcí a miest v zmysle zákona SNR č.369/1991 Zb. o obecnom zriadení v znení neskorších predpisov sú práve  obce a mestá zodpovedné za zabezpečenie verejného poriadku na svojom území. Za týmto účelom SNR schválila zákon č. 564/1991 Zb. o obecnej polícii v znení neskorších predpisov. Obecná (mestská) polícia je poriadkový útvar pôsobiaci pri zabezpečovaní obecných vecí verejného poriadku, ochrany životného prostredia v obci a plnení úloh vyplývajúcich zo všeobecne záväzných nariadení obce, z uznesení obecného zastupiteľstva a z rozhodnutí starostu obce. Zákon tiež upravuje aj jej organizáciu a práva a povinnosti príslušníkov obecnej polície.
            Mestská polícia Ružomberok bola zriadená dňa 1. júla 1992 Všeobecne záväzným nariadením mesta č. 4/1992 ako poriadkový útvar mesta a tvorilo ju 22 mestských policajtov. Od roku 2004 bol počet príslušníkov MsP Ružomberok navýšený na 27 policajtov a jednu administratívnu pracovníčku. Medzitým sa počet strážcov zákona menil, najvyšší bol 31, momentálne je to 27 príslušníkov MsP.
            Mestská polícia Ružomberok od roku 1997 prevádzkuje pult centrálnej ochrany (PCO), kde si môžu majitelia nehnuteľností alebo prevádzok pripojiť svoje objekty pod ochranu mestskej polície. V súčasnosti je na PCO pripojených 75 objektov.
            V rámci priblíženia sa k občanom bola v roku 2000 na operačnom pracovisku zriadená bezplatná tiesňová linka č.t.: 159, kde môžu občania 24 hodín denne požiadať o pomoc, prípadne oznámiť protiprávne konanie, či už ako poškodení tak aj ako svedkovia protiprávneho konania.
            Od roku 2002 vykonávajú mestskí policajti aj odchyt túlavých zvierat najmä psov. Preto v uvedenom roku vybraní príslušníci MsP absolvovali kurz: Odchyt túlavých a zabehnutých zvierat, kde získali vedomosti o základoch etológie zvierat, biologických zásadách chovu spoločenských zvierat, poznatky o základoch anatómie, fyziológie zvierat a o najzávažnejších ochoreniach hlavne psov a mačiek najmä vo vzťahu k zoonózam. Súčasťou kurzu je aj poznanie základov služobnej kynológie a výcviku psov, projektovanie útulkov, karantén a možnosti DDD činnosti, vrátane príslušnej legislatívy.
            Od roku 2003 prevádzkuje mestská polícia aj kamerový systém pozostávajúci zo štyroch kamier. V súčasnosti je tento kamerový systém založený na analógovej technológii už morálne opotrebovaný, preto v decembri 2012 bola zrealizovaná prvá etapa budovania nového kamerového systému s digitálnou technológiou. Táto etapa bola uskutočnená aj vďaka dotácii z Rady vlády SR pre prevenciu kriminality. (V novembri 2014 sa mestská polícia presťahovala do novej, zrekonštruovanej budovy  na Ul. A. Bernoláka č.44, kde sídli doposiaľ. Presťahovanie sa do novej budovy umožnilo rozšírenie mestského kamerového systému, Mesto Ružomberok na konci roku 2020 disponuje 50 kamerami na území celého mesta.)
            Nasledujúci rok teda rok 2004 bol pre všetky mestské polície na Slovensku dôležitý. Novelizáciou zákona SNR č. 564/1991 o obecnej polícii prevzal dohľad nad mestskými políciami štát. Zároveň bola touto novelou na celom Slovensku zjednotená uniforma mestských policajtov (tmavomodrá farba) a taktiež označenie motorových vozidiel používaných na plnenie úloh mestskej polície.
            Od vzniku mestskej polície po súčasnosť  je náčelníkom Mestskej polície Ružomberok Ing. Ivan Stromko.
          </p>
          <a href="#zoznam_linkov" className="to-Top" onClick={toTop}>
            <FaArrowAltCircleUp />
          </a>
        </section>
        <div className="background-image"></div>
        <section>
          <h1 id="výberové_konanie">VÝBEROVÉ KONANIE</h1>
          <p>
            Požiadavky pre zaradenie uchádzača do výberového konania o pracovné miesto na obsadenie pozície príslušník mestskej polície sú:
            <br />
            <br />
            - vek najmenej 21 rokov
            <br />
            - ukončené úplné stredné vzdelanie (maturita)
            <br />
            - zodpovedajúca fyzická zdatnosť,
            <br />
            - zodpovedajúca duševná spôsobilosť,
            <br />
            - morálna bezúhonnosť,
            <br />
            - vodičský preukaz pre skupinu B.
            <br />  
            <br />
            Zverejnené 16.5.2019 -rj-
            <br />
            <br />
            Aktualizované 18.1.2023
          </p>
          <a href="#zoznam_linkov" className="to-Top" onClick={toTop}>
            <FaArrowAltCircleUp />
          </a>
        </section>
        <div className="background-image"></div>
        <section>
          <h1 id="kontakty">KONTAKTY</h1>
          <p className="kontakt-text">
            Mestská polícia Ružomberok,
            A. Bernoláka 44, 034 01
            Ružomberok - - -  
            Operačné pracovisko: tel. č.: 159,
            +421 44 432 28 00, +421 44 431 44 50
            mobil: +421 915 572 077
            e-mail: msp@ruzomberok.sk  - -  -  
            Náčelník MsP Ružomberok: 
            Ing. Ivan Stromko -  -  - 
            +421 44 431 44 60, +421 905 257 499
            e-mail: stromko@ruzomberok.sk -  -  - 
            Zástupca náčelníka pre kontrolu a výkon služby: 
            Ing. Libor Kraft 
            +421 44 431 44 80, +421 907 829 526
            e-mail: kraft@ruzomberok.sk -  -  - 
            Zástupca náčelníka pre veci vnútorné a organizačné: Mgr. Tomáš Matejovie
            tel: +421 44 431 44 40, mobil: +421 907 910 171
            e-mail: matejovie@ruzomberok.sk -  -  - 
            Prevencia kriminality: Mgr. Roman Jankovič
            +421 44 431 44 77, +421 917 403 679 
            e-mail: jankovic@ruzomberok.sk -  -  - 
            Oddelenie objasňovania priestupkov:
            Ing. Peter Patoprstý
            +421 44 431 44 76, +421 915 572 093 -  -  - 
            Bc. Ján Veselovský
            +421 44 431 44 76, +421 903 149 416
          </p>
          <a href="#zoznam_linkov" className="to-Top" onClick={toTop}>
            <FaArrowAltCircleUp />
          </a>
        </section>
      </div>
    </div>
  )
}

export default Main