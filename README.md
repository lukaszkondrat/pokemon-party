No więc to są jakieś pierwsze przymiarki, ale napotkałem kilka przeszkód, więc będę wdzięczny, jak byś na to zerknął może i mi pomógł to pokonać:

1) przede wszystkim, jak używam useState w App.js i próbuję napisać coś w stylu: setCurrentParrty(currParty=>[...currParty, partyPokemon]),
żeby mi aktualizował stan w oparciu o poprzedni i dorzucał pokemony do [] z tymi, co są na imprezie, to po pierwszym cyklu renderowania mi zwraca pustą Array
i wywala cała apkę. Chwilowo powinno wszystko działac, bo to zmieniłem i tylko jeden imprezowicz się wyświetla w danym momencie.
2) drugi problem jest związany z pierwszym, tzn. jak zaimplementowałem filtrowanie pokemonów, to przy pierwszym renderowaniu nie zaciąga się lista pokemonów
z API. Dopiero jak zacznę coś wpisywać w wyszukiwarkę, to wszystkie się pojawiają..

Z resztą pewnie jestem w stanie sobie poradzić, ale mega mnie przyblokowało to, jak próbuję update'ować state,
to w pierwszej iteracji dostaje pusta [] i wtedy np .map() nie działa, bo nie chce się mapować po niczym.
