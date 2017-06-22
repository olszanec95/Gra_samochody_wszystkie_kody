#pragma strict

var manager : Manager;
var nrChallengeText : Text;
var nrChallengeText_Map2 : Text;

function Start () {
	manager = gameObject.Find("Manager").GetComponent(Manager);
}

function Update () 
{
	if(Input.GetKey(KeyCode.Escape))
	{
		Application.LoadLevel("Menu");
	}

	nrChallengeText.text = ""+manager.numberOfChallenge+" / 10";
	nrChallengeText_Map2.text = ""+manager.numberOfChallenge_Map2+" / 10";
}


function Map_1 ()
{
	manager.currentMap = "sc1";
	Application.LoadLevel("Chellange_Car");
}

function Map_2 ()
{
	manager.currentMap = "sc2";
	Application.LoadLevel("Chellange_Car");
}