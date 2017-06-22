#pragma strict

var lewo : boolean = false;
var prawo : boolean = false;
var gaz : boolean = false;
var hamulec : boolean = false;

var spawn : Transform;
var manager : Manager;

function Awake()
{
	manager = gameObject.Find("Manager").GetComponent(Manager);
	Instantiate(manager.currentCar, spawn.transform.position, Quaternion.identity);
}

function LewoPush()
{
	if(!prawo && !lewo)
		lewo = true;
}

function LewoPop()
{
	if(lewo)
		lewo = false;
}

function PrawoPush()
{
	if(!lewo && !prawo)
		prawo = true;
}

function PrawoPop()
{
	if(prawo)
		prawo = false;
}

function GazPush()
{
	if(!gaz && !hamulec)
		gaz = true;
}

function GazPop()
{
	if(gaz)
		gaz = false;
}

function HamulecPush()
{
	if(!hamulec && !gaz)
		hamulec = true;
}

function HamulecPop()
{
	if(hamulec)
		hamulec = false;
}