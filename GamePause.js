#pragma strict

var pauseMenu : GameObject;
var manager : Manager;

function Start () {
	manager = gameObject.Find("Manager").GetComponent(Manager);
	pauseMenu.SetActive(false);
}

function Update () {
	if(Input.GetKeyDown(KeyCode.Escape))
	{
		if(Time.timeScale != 0)
		{
			Time.timeScale = 0;
			pauseMenu.SetActive(true);
		}
		else
		{
			Time.timeScale = 1.0f;
			pauseMenu.SetActive(false);
		}
	}
}

function Resume()
{
	Time.timeScale = 1.0f;
	pauseMenu.SetActive(false);
}

function Restart()
{
	Application.LoadLevel(Application.loadedLevel);
	Time.timeScale = 1.0f;
}

function Exit()
{
	Application.LoadLevel("Menu");
	Time.timeScale = 1.0f;
}