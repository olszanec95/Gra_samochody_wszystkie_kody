#pragma strict

var agent : UnityEngine.AI.NavMeshAgent;
var target : GameObject;
var explosion : GameObject;
var explode : boolean = false;

var redLight : GameObject;
var blueLight : GameObject;
var timer : float = 0.5f;

var policeManager : PoliceManager;
var car : Health;


function Start () {
	agent = gameObject.GetComponent(UnityEngine.AI.NavMeshAgent);
	car = gameObject.FindWithTag("Player").GetComponent(Health);
	policeManager = gameObject.Find("PoliceManager").GetComponent(PoliceManager);
	explosion.SetActive(false);
	blueLight.SetActive(true);
	redLight.SetActive(false);
}

function Update () 
{
	if(target == null)
		target = gameObject.FindWithTag("Player");

	if(!policeManager.finish && !explode)
		navigate();
	else
		agent.Stop();

		Timer();
	if(!explode)
		PoliceLight();

}

function navigate()
{
	if(policeManager.finish || explode)
	{
		return;
	}
	agent.Resume();

    agent.SetDestination(target.transform.position);

    if (!agent.pathPending)
    {
		if(agent.remainingDistance <= agent.stoppingDistance)
		{
			if (!agent.hasPath || agent.velocity.sqrMagnitude == 0f)
			{
				gameObject.transform.LookAt(target.transform.position);
				agent.Stop();
			}
		}
	}
}

function OnCollisionEnter(collision: Collision)
{
	if(collision.gameObject.tag == "Police")
	{
		explosion.SetActive(true);
		explode = true;
		agent.enabled = false;
		yield WaitForSeconds (3);
		Destroy(explosion);

		//gameObject.tag = "Untagged";
	}
	else if(collision.gameObject.tag == "Player")
	{
		explosion.SetActive(true);
		explode = true;
		agent.enabled = false;
		//gameObject.tag = "Untagged";
		if(car.health <= 0)
			policeManager.finish = true;
		else
			policeManager.finish = false;

		yield WaitForSeconds (3);
		Destroy(explosion);
	}
}

function PoliceLight()
{
	
	if(timer >= 0)
	{
		redLight.SetActive(false);
		blueLight.SetActive(true);
	}
	else if(timer < 0)
	{
		blueLight.SetActive(false);
		redLight.SetActive(true);
	}
}


function Timer()
{
	timer -= Time.deltaTime;

	if(timer <= -0.5f)
		timer = 0.5f;
}