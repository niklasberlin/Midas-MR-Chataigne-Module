## Midas MR and Behringer X-Air control with chataigne by OSC
Default port must be 10024 !

Most of the commands run for both MR12 and MR18; but some of them will work only for a given model !   
The Player-Functions for example are valid only for MR12   
And please be aware that the number of available Channels and Busses etc depends on the model (MR-12 or 18; XR 12, 16, or 18) !

### Updated to version 1.8
Now we have Feedback from the MR/X-Air Console (Names and Fader-Levels, EQ, Mute, Dyn and Pan Status etc)... 
And there is a new feature that allows to send values directly from the "Channels-Container" to the console, for example after changing a value in the Channel Field in Chataigne!
Please be extremely careful with this feature; as you may erase settings and values on the console !! For example if you hit "SEND" before having any datas and values in the fields, which results in a sort of "RESET" !!  
The best way to proceed is :  
Before sending data from Chataigne to the console, first recover all the data from the console by "click To Update All"; than make eventually changes in the Channels and send them to the console by "Click To Send Updates"
Meters still do not work....  
For instance I limited the "Send-to-Console-Feature"  to the Channels Values Container (just to avoid risks and confusion)

To get Feedback from the console, "Listen to Feedback" in the Parameter-Field must be activated ! (it is "ON" by default when inserting a MR-Module)   
To initiate Feedback it may be necessary to hit the Sync-Button ("Click to update all") or send one of the Sync-Request-Actions (in the Action Menu "Requests")
And please note that after  inserting a "new" MR-Module and/or after changing the Remote-Host-Address, Feedback from the console may not be available immediatly and may need a restart of Chataigne. 
(*unless you had already entered the "remoteHost address" in the "module.json" file before inserting the module; in this case Feedback will be available instantly !*) But anyway, once the session file is "saved" then the feedback will always be available !   

**Older version 1.7**  
**Older version 1.5**  
**Older version 1.3**
