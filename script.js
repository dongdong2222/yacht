class _Observer {
    update(){

    }
}
class _Subject {
    registObserver (){

    }
    deleteObserver () {

    }
    notifyObserver () {

    }
}



class Player extends _Observer{ //observer
    constructor(name){
        this.name = name;
    }
    name; //player 이름 수시로 바꿀수 있게
    winCount; //지금까지 1등한 수, 랭킹 표시
    changeName(){

    }
}

class Dice extends _Observer{
    constructor(){

    }
    currentNum; //현재 주사위의 수
    fakeNum; //그림상 주사위의 수 던졌을 때랑 상관없는 수 즉, 던지기 전 수

    throw(){ //현재 주사위 수로 고정

    }
    shake(){ //흔들면 현재 주사위 수가 랜덤하게 바뀜

    }
}

class PalyerList extends _Subject{ //player들과 옵저버 관계
    playerList; //총 player들을 저장해놓음 subject
    checkedPlayer; //이번에 게임에 참여할 player들

    addPlayer(){ //player 추가

    }
    deletePlayer() { //player 삭제

    }
}

class Board extends _Subject{ //dice, player 와 옵저버 관계
    dices;
    currentPlayer; //현재 턴인 player
    turn; // 현재 라운드 총 13라운드


}

class ScoreBoard {

}
