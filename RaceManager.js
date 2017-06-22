import UnityEngine.UI;

var finish : boolean = false;
var dodaj : boolean = true;
var finishMenu : GameObject;
var checkPoint : GameObject[];
var currentCheckPoint : GameObject;
var timer : float = 0.0f;
var intCheckPoint : int = 0;
var maxCheckPoint : int = 0;
var score : int = 0;

var intLap : int = 0;
var maxLap : int = 0;
var i : int = 0;

var lapTxt : Text;
var BestTxt : Text;
var timerTxt_update : Text;
var timerTxt : Text;
var scoreTxt : Text;

var manager : Manager;

function Start () {
	manager = gameObject.Find("Manager").GetComponent(Manager);
	finishMenu.SetActive(false);
	currentCheckPoint = checkPoint[i];
}

function Update () 
{
	lapTxt.text = "Lap "+intLap+" / "+maxLap;
	BestTxt.text = "Best: "+manager.bestTime_1;
	timerTxt_update.text = ""+timer;

	if(intLap >= maxLap)
		Finish();
	else
		timer += Time.deltaTime;

}

function ChangeCheckPoint ()
{
	if(i < checkPoint.length-1)
		i++;
	else 
		i = 0;

	currentCheckPoint = checkPoint[i];
}

function Finish()
{
	yield WaitForSeconds (2);
	finish = true;
	if(timer > manager.bestTime_1)
	{
		PlayerPrefs.SetFloat("BestTime", timer);
		score = 3500;
	}
	else
		score = 1500;
	
	if(dodaj)
		manager.score += score;
	dodaj = false;
	timerTxt.text = "Time: "+timer;
	scoreTxt.text = "Score: "+score;
	finishMenu.SetActive(true);

}