using UnityEngine;
using System.Collections;

[RequireComponent(typeof(AudioSource))]
public class Audio : MonoBehaviour {

	void Start () {
		AudioSource audioSource = gameObject.AddComponent<AudioSource>();
		AudioSource audio = GetComponent<AudioSource>();
		//audio.Play ();
	}
	
	void Update () {
		AudioSource audio = GetComponent<AudioSource>();

		if(Application.loadedLevelName == "Pre_Menu" ||
			Application.loadedLevelName == "Menu" ||
			Application.loadedLevelName == "Single" ||
			Application.loadedLevelName == "Chellange_Map" ||
			Application.loadedLevelName == "Chellange_Car" ||
			Application.loadedLevelName == "sc1_Free")
		{
			audio.volume = 1;
		}
		else if(Application.loadedLevelName == "sc1_Police" ||
			Application.loadedLevelName == "sc2_Police")
		{
			audio.volume = 0;
		}
	}
}
