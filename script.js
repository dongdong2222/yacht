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
        super()
        this.name = name;
    }
    name; //player 이름 수시로 바꿀수 있게
    winCount; //지금까지 1등한 수, 랭킹 표시
    changeName(){

    }
}

class Dice extends _Observer{
    constructor(){
        super();
    }
    currentNum; //현재 주사위의 수
    fakeNum; //그림상 주사위의 수 던졌을 때랑 상관없는 수 즉, 던지기 전 수

    throw(){ //현재 주사위 수로 고정

    }
    shake(){ //흔들면 현재 주사위 수가 랜덤하게 바뀜

    }
}

class PlayerList extends _Subject{ //player들과 옵저버 관계
    constructor() {
        super();
    }
    playerList = []; //총 player들을 저장해놓음 subject
    checkedPlayer; //이번에 게임에 참여할 player들

    registObserver(ob){ //player 추가
        this.playerList.push(ob);
    }
    deleteObserver(ob){ //player 삭제
        for(var i=0;i<this.playerList.length;i++){
            if(this.playerList[i] = ob)
                this.playerList.splice(i,1);
        }
    }
    notifyObserver () { // player들의 랭킹 업데이트
        for(var i=0;i<this.playerList.length;i++){
            this.playerList[i].update();
        }
    }
    makePlayerTable() {
        var playerForm = document.getElementById("playerList");
        var userTable = document.createElement("table");
        userTable.setAttribute("class", "playerTable");
        for(var i=0;i<this.playerList.length; i++){
            console.log("lol");
            var row = document.createElement("tr");
            var player = document.createElement("td");
            player.innerText = this.playerList[i].name;
            row.appendChild(player);
            userTable.appendChild(row);
        }
        playerForm.appendChild(userTable);

    }

}

class Board extends _Subject{ //dice, player 와 옵저버 관계
    constructor() {
        super();
    }
    dices;
    currentPlayer; //현재 턴인 player
    turn; // 현재 라운드 총 13라운드


}

class ScoreBoard {

}

var player = new Player("Dong Ju");
var List = new PlayerList();
List.registObserver(player);
console.log(List.playerList);
List.makePlayerTable();