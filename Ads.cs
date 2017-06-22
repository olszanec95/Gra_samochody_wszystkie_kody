using System.Collections;
using GoogleMobileAds.Api;
using System.Collections.Generic;
using UnityEngine;

public class Ads : MonoBehaviour {


	BannerView banner;
	InterstitialAd fullAd;
	int numeral = 0;

	void Awake()
	{
		numeral = 0;
		RequestFull ();

	}

	void Update()
	{
		if(numeral == 0)
			ShowFull ();
	}

	void RequestBanner()
	{
		string bannerID = "ca-app-pub-1822284172999308/6588864875";
		banner = new BannerView (bannerID, AdSize.SmartBanner, AdPosition.Bottom);
		AdRequest adRequest = new AdRequest.Builder ().Build ();
		banner.LoadAd (adRequest);
	}

	public void ShowBanner()
	{
		banner.Show ();
		numeral = 1;
	}

	void RequestFull()
	{
		string idFull = "ca-app-pub-1822284172999308/9623056471";
		fullAd = new InterstitialAd (idFull);
		AdRequest adRequest = new AdRequest.Builder ().Build ();
		fullAd.LoadAd (adRequest);
	}

	public void ShowFull()
	{
		if (Application.loadedLevelName == "Chellange_Map") {
			if (fullAd.IsLoaded ()) {
				fullAd.Show ();
				RequestFull ();
				Debug.Log ("Wyswietenie");
			} else {
				RequestFull ();
				Debug.Log ("Tylko załadowanie");
			}
		}
	}

}
