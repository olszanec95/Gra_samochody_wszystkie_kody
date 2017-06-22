#pragma strict

var m_Slider : Slider;
var newLife_Holder : GameObject;
var newLife_Slider : Slider;

var FillImage : Image;
var FillImage_NewLifeSlider : Image;
var FullColor : Color = Color.green;
var ZeroColor : Color = Color.red;
var lifeInt : Text;
var timer : float = 0.0f;

var hp : Health;
var manager : Manager;

function Start () 
{
	manager = gameObject.Find("Manager").GetComponent(Manager);
	hp = gameObject.FindWithTag("Player").GetComponent(Health);
	m_Slider.maxValue = hp.startHealth;	
	newLife_Slider.enabled = false;
	newLife_Holder.SetActive(false);
}

function Update()
{
	m_Slider.value = hp.health;
	if(hp.health >= 0)
		lifeInt.text = ""+hp.health;
	FillImage.color = Color.Lerp(ZeroColor,FullColor, hp.health/hp.startHealth);

	CheckIfSpecialCar();
}


function CheckIfSpecialCar()
{
	if(manager.currentCar.name == "Samochod_6" && hp.health < hp.startHealth)
	{
		newLife_Slider.enabled = true;
		FillImage_NewLifeSlider.color = FullColor;
		newLife_Holder.SetActive(true);
		newLife_Slider.maxValue = 7;
		newLife_Slider.value = timer;
		if(hp.health < hp.startHealth)
		{
			TimerClock();
		}
	}
	else
	{
		newLife_Holder.SetActive(false);
	}
}

function TimerClock()
{
	if(timer < 7.0f)
		timer += Time.deltaTime;
	if(timer >= 7.0f)
	{
		hp.health++;
		timer = 0.0f;
	}
}