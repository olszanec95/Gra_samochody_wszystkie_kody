#pragma strict
import UnityEngine.UI;

var finish : boolean = false;
var dodaj : boolean = true;
var nextChallenge : boolean = false;
var complet : boolean = false;
var restartButton : GameObject;
var nextButton : GameObject;
var menu : GameObject;
var timer : float = 0.0f;
var myTimer : int;
var score : int;
var scoreBuf : int;
var	timerTxt : Text;
var timerTxt_update : Text;
var scoreTxt : Text;

var infoText : Text;

var ChDT : int = 0;
var challengeCosts : int = 0;
var challengeCollect : int = 0;
var moneyPref : GameObject;
var manager : Manager;
var car : CarControlJS;

function Start () 
{
	menu.SetActive(false);
	manager = gameObject.Find("Manager").GetComponent(Manager);
	car = gameObject.FindWithTag("Player").GetComponent(CarControlJS);

	complet = false;

	if(manager.numberOfChallenge == 4 || manager.numberOfChallenge_Map2 == 4 ||
	   manager.numberOfChallenge == 6 || manager.numberOfChallenge_Map2 == 6 ||
	   manager.numberOfChallenge == 9 || manager.numberOfChallenge_Map2 == 9)
	   		moneyPref.SetActive(true);
	   else
	   		moneyPref.SetActive(false);
}

function Update () 
{
	score = timer*100;



	if(finish || complet)
		MenuFinish();
	else
		timer += Time.deltaTime;

	UpdateTextInRightCorner();
	NextOrRestart();

	timerTxt.text = ""+timer;
	scoreTxt.text = "Score "+score;
	InfoTextUpdate();

	ChDT = car.ChDT;
	challengeCollect = car.challengeCollect;
	challengeCosts = ChDT * 350;
}

function MenuFinish()
{
	yield WaitForSeconds (3);
	menu.SetActive(true);
	if(dodaj)
		manager.score += score;
	dodaj = false;
	PlayerPrefs.SetInt("Score",manager.score);

}

function Menu()
{
    if(nextChallenge)
	{
		if(manager.currentMap == "sc1")
		{
			manager.numberOfChallenge++;
			PlayerPrefs.SetInt("NumberOfChallenge",manager.numberOfChallenge);
		}
		if(manager.currentMap == "sc2")
		{
			manager.numberOfChallenge_Map2++;
			PlayerPrefs.SetInt("NumberOfChallenge_Map2",manager.numberOfChallenge_Map2);
		}
	}
    nextChallenge = false;
    Application.LoadLevel("Menu");
    
}

function NextBut()
{
	if(nextChallenge)
	{
		if(manager.currentMap == "sc1")
		{
			manager.numberOfChallenge++;
			PlayerPrefs.SetInt("NumberOfChallenge",manager.numberOfChallenge);
		}
		if(manager.currentMap == "sc2")
		{
			manager.numberOfChallenge_Map2++;
			PlayerPrefs.SetInt("NumberOfChallenge_Map2",manager.numberOfChallenge_Map2);
		}
	}
    nextChallenge = false;
    Application.LoadLevel(Application.loadedLevel);
}

function Restart()
{
	Application.LoadLevel(Application.loadedLevel);
}

function CheckNewCar()
{
	if(nextChallenge)
	{
		if(manager.currentMap == "sc1")
		{
			manager.numberOfChallenge++;
			PlayerPrefs.SetInt("NumberOfChallenge",manager.numberOfChallenge);
		}
		if(manager.currentMap == "sc2")
		{
			manager.numberOfChallenge_Map2++;
			PlayerPrefs.SetInt("NumberOfChallenge_Map2",manager.numberOfChallenge_Map2);
		}
	}
    nextChallenge = false;
    Application.LoadLevel("Chellange_Car");
}

function InfoTextUpdate()
{
    if(manager.typeGame == "_Police")
    {
        if(manager.currentMap == "sc1")
        {
            infoText.text = manager.textOfChallenge[manager.numberOfChallenge];
            if(manager.numberOfChallenge == 0 && timer >= 15.0){					// I - wyzwanie
                infoText.text = "Challenge complet. You can finish your chase.";
                complet = true;
                nextChallenge = true;
            }
            if(manager.numberOfChallenge == 1 && ChDT >= 15){						// II - wyzwanie
                infoText.text = "Challenge complet. You can finish your chase.";
                complet = true;
                nextChallenge = true;
            }
            if(manager.numberOfChallenge == 2 && timer >= 30.0){					// III - wyzwanie
                infoText.text = "Challenge complet. You can finish your chase.";
                complet = true;
                nextChallenge = true;
            }
            if(manager.numberOfChallenge == 3 && challengeCosts >= 5000){			// IV - wyzwanie
                infoText.text = "Challenge complet. You can finish your chase.";
                complet = true;
                nextChallenge = true;
            }
            if(manager.numberOfChallenge == 4 && challengeCollect >= 3){			// V - wyzwanie
                infoText.text = "Challenge complet. You can finish your chase.";
                complet = true;
                nextChallenge = true;
            }
            if(manager.numberOfChallenge == 5 && timer >= 45.0){					// VI - wyzwanie
                infoText.text = "Challenge complet. You can finish your chase.";
                complet = true;
                nextChallenge = true;
            }
            if(manager.numberOfChallenge == 6 && challengeCollect >= 5){			// VII - wyzwanie
                infoText.text = "Challenge complet. You can finish your chase.";
                complet = true;
                nextChallenge = true;
            }
            if(manager.numberOfChallenge == 7 && challengeCosts >= 10000){			// VIII - wyzwanie
                infoText.text = "Challenge complet. You can finish your chase.";
                complet = true;
                nextChallenge = true;
            }
            if(manager.numberOfChallenge == 8 && timer >= 60.0){					// IX - wyzwanie
                infoText.text = "Challenge complet. You can finish your chase.";
                complet = true;
                nextChallenge = true;
            }
            if(manager.numberOfChallenge == 9 && challengeCollect >= 7){			// X - wyzwanie
                infoText.text = "Challenge complet. You can finish your chase.";
                complet = true;
                nextChallenge = true;
            }
        }
        else if(manager.currentMap == "sc2")
        {
        	infoText.text = manager.textOfChallenge_Map2[manager.numberOfChallenge_Map2];
            if(manager.numberOfChallenge_Map2 == 0 && timer >= 45.0){					// I - wyzwanie
                infoText.text = "Challenge complet. You can finish your chase.";
                complet = true;
                nextChallenge = true;
            }
            if(manager.numberOfChallenge_Map2 == 1 && ChDT >= 25){						// II - wyzwanie
                infoText.text = "Challenge complet. You can finish your chase.";
                complet = true;
                nextChallenge = true;
            }
            if(manager.numberOfChallenge_Map2 == 2 && timer >= 60.0){					// III - wyzwanie
                infoText.text = "Challenge complet. You can finish your chase.";
                complet = true;
                nextChallenge = true;
            }
            if(manager.numberOfChallenge_Map2 == 3 && challengeCosts >= 10000){			// IV - wyzwanie
                infoText.text = "Challenge complet. You can finish your chase.";
                complet = true;
                nextChallenge = true;
            }
            if(manager.numberOfChallenge_Map2 == 4 && challengeCollect >= 5){			// V - wyzwanie
                infoText.text = "Challenge complet. You can finish your chase.";
                complet = true;
                nextChallenge = true;
            }
            if(manager.numberOfChallenge_Map2 == 5 && timer >= 75.0){					// VI - wyzwanie
                infoText.text = "Challenge complet. You can finish your chase.";
                complet = true;
                nextChallenge = true;
            }
            if(manager.numberOfChallenge_Map2 == 6 && challengeCollect >= 7){			// VII - wyzwanie
                infoText.text = "Challenge complet. You can finish your chase.";
                complet = true;
                nextChallenge = true;
            }
            if(manager.numberOfChallenge_Map2 == 7 && challengeCosts >= 15000){			// VIII - wyzwanie
                infoText.text = "Challenge complet. You can finish your chase.";
                complet = true;
                nextChallenge = true;
            }
            if(manager.numberOfChallenge_Map2 == 8 && timer >= 90.0){					// IX - wyzwanie
                infoText.text = "Challenge complet. You can finish your chase.";
                complet = true;
                nextChallenge = true;
            }
            if(manager.numberOfChallenge_Map2 == 9 && challengeCollect >= 9){			// X - wyzwanie
                infoText.text = "Challenge complet. You can finish your chase.";
                complet = true;
                nextChallenge = true;
            }
        }
    }
}


function UpdateTextInRightCorner()
{
	if(manager.currentMap == "sc1")
	{
		if(manager.numberOfChallenge == 0 ||
		   manager.numberOfChallenge == 2 ||
		   manager.numberOfChallenge == 5 ||
		   manager.numberOfChallenge == 8 )
		   {
		   		timerTxt_update.text = "Time:"+timer;
		   }

		if(manager.numberOfChallenge == 1)
			timerTxt_update.text = ""+ChDT+" / 15";

		if(manager.numberOfChallenge == 3 ||
		   manager.numberOfChallenge == 7)
		   		timerTxt_update.text = "Costs: "+challengeCosts;

		if(manager.numberOfChallenge == 4 ||
		   manager.numberOfChallenge == 6 ||
		   manager.numberOfChallenge == 9)
		   		timerTxt_update.text = "Pack: "+challengeCollect;
	}
	if(manager.currentMap == "sc2")
	{
		if(manager.numberOfChallenge_Map2 == 0 ||
		   manager.numberOfChallenge_Map2 == 2 ||
		   manager.numberOfChallenge_Map2 == 5 ||
		   manager.numberOfChallenge_Map2 == 8 )
		   {
		   		timerTxt_update.text = "Time:"+timer;
		   }

		if(manager.numberOfChallenge_Map2 == 1)
			timerTxt_update.text = ""+ChDT+" / 25";

		if(manager.numberOfChallenge_Map2 == 3 ||
		   manager.numberOfChallenge_Map2 == 7)
		   		timerTxt_update.text = "Costs: "+challengeCosts;

		if(manager.numberOfChallenge_Map2 == 4 ||
		   manager.numberOfChallenge_Map2 == 6 ||
		   manager.numberOfChallenge_Map2 == 9)
		   		timerTxt_update.text = "Pack: "+challengeCollect;
	}
}



function NextOrRestart()
{
	if(!complet)
	{
		restartButton.SetActive(true);
		nextButton.SetActive(false);
	}
	else
	{
		restartButton.SetActive(false);
		nextButton.SetActive(true);
	}
}

function ContinueButton()
{
	menu.SetActive(false);
}