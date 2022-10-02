# Project-Ponte

Ez a projekt a "Front-end felvételi feladat" alapján készült a fejlesztő legjobb tudásával. A projekt célja egy olyan rendszer kialakítása, amelyben lehetőség van async módon különböző projektekkel kapcsolatos információk kezelni.

## Telepítés

A projektben NodePackage Managert használtam, így az **npm install** paranccsal lehet a szükséges függőségeket telepíteni.

## Futtatás

A projekt ViteJS alapokon nyugszik. Telepítés után az **npm run dev** kóddal lehet fejlesztői környezetben futtatni az oldalt.

## Fordítás

A fordítást is a beépített ViteJS végzi. Az **npm run build** parancs kiadása után a typescript fordítása (tsc), illetve az oldal felépítése is megtörténik. Ezután az **npm run preview** paranccsal futtatható az oldal.

## A program működése

A program default módon a constans mappából behívja az első projektet, amelynek részletei a "Megnézem" gombra kattintva töltődnek be. A kártya jobb felső található piros &times;-el törölhető a projekt.
Új projektet az oldal jobb felső részében található "Új projekt" gomb megnyomásával lehet létrehozni. Ekkor az oldalon modal-szerű kinézetben megjelenik egy varázsló, amely végigsegíti a felhasználót a létrehozásban.
**Kötelező és elhagyható mezők**
**_Projekt információk_**
Projekt megnevezése: Kötelező mező
Projekt leírása: Nem kötelező, de amennyiben igen, akkor minimum 50 maximum 500 karakter
**_Felhasználók_**
Felhasználó: Nem kötelező (akkor sem, ha a feladat létezik [de még nincs hozzárendelve])
Feladat: Nem kötelező (akkor sem, ha a felhasználó nem létezik)
**_Linkek_**
Link: Kötelező mező (helyes link formátuma validálva)

## Legfőbb dependenciák

_TailwindCSS_
_React-router-dom_
_uuid_

## Saját megjegyezések a projekttel kapcsolatban

A feladat megoldása során törekedtem a tőlem telhető legjobb eredményt szolgáltatni. A fejlesztés során sok újdonságot megtanultam. A TypeScript láthatóan még nehézségeket okoz, de folyamatosan bújom az internetet (és a projekt alatt is bújtam), hogy kifejlesszem magamban a TypeScript nyújtotta lehetőségeket. Emiatt előfordul több helyen (sajnos), hogy nem tudtam megoldást találni, emiatt a **//@ts-ignore** parancsot kellett használnom.

Sajnos idő hiányában a filter mezőt nem tudtam elkészíteni 😔

A projekt nagyon sok újdonsággal szolgált részemre, és egyből látom miképp lehetne javítani rajta, bár a feladat erre nem tért ki. Amennyiben back-end lehetőség volna, a felhasználókat biztosan külön táblában kezelném, és levizsgálnám a létezésüket a projekt létrehozásban, és ha már van ilyen felhaszáló, akkor referenciáznám és nem új felhasználót hoznék létre az adataival.

Sosem volt még olyan projektem, amelyen többen dolgoztunk volna, így a GitHubot főleg arra használom, hogy a saját projektjeimet bárhol elérjem. Emiatt sosem készítettem még leírást, így csak reménykedni tudok abban, hogy a Fordítási és Futtatási dokumentációt jól értelmeztem.

Köszönöm a lehetőséget a projektre, úgy gondolom, hogy sikerült sokat fejlődnöm már azzal, hogy elkészítettem.
