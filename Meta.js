﻿#pragma strict

var manager : RaceManager;

function Start () {
	manager = gameObject.Find("RaceManager").GetComponent(RaceManager);
}

function Update () {

}

function OnTriggerEnter(col: Collider)
{
	if(col.gameObject.tag == "Player")
	{
		if(manager.currentCheckPoint == this.gameObject)
		{
			if(manager.intLap < manager.maxLap)
				manager.intLap++;

			manager.ChangeCheckPoint();
		}
		else
			Debug.Log("Oszust");
	}
}