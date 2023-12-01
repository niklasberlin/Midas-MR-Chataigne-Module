## Midas MR and Behringer X-Air control with chataigne by OSC
Default port must be 10024 !

Most of the commands and actions run for both, MR12 and MR18 (and Behringer XR12 to XR18); but some of them will work only for a given model !   
The Player-Functions for example are valid only for MR12   
And please be aware that the number of available Channels and Busses etc depends on the model (MR-12 or 18; XR 12, 16, or 18) !

### Updated to version 2.3  (dec 2023)
Now we have feedback for Meters also !   
We have Feedback from the MR/X-Air Console for Names and Fader-Levels, EQ, Mute, Dyn and Pan Status etc... 
There is also a Feedback-Tab called **"Selected Channel"**. You can select a given channel by Target and Number and get its (pretty)full feedback as : name, fader, eq- and dyn-settings etc, etc... I will add more values later-on, bur also don't wanna overload this tab either) After changing the target or the channel-number just hit "Click To Sync" to request the new values from the console. And you can also reset the whole Selected-Channel-Form by clicking the "Reset-Button".   
There is also a "radio-button" called "Show SelChan Values" that has to be checked to show the values.   
    
The **"Click to Reset All"** Button will reset ALL value-fields in the Containers ! But will NOT affect any value on the console as it does not send Data outside Chataigne !  

You can also send values directly from the **"Channels-Tab"** to the console, for example after having changed a value in a given Channel Field in Chataigne ! Checking the Radio Button **"Allow Send-to-Console"** will activate this feature -> but does not send any data yet, if the button is unchecked (=> default-setting) !!   
Please use this feature carefully, as you may erase settings and values on the console !!  For example if you hit "SEND" before having any datas and values in the form-fields, this will indeed results in a sort of "RESET" on the console !! In fact, the function **"Click To Send Updates"** will send all the values (and also the "zero-values" !!) of all the **Channel-Container**-Fields at once to the console !! And if the fields are empty (or set to zero), the result is a complète RESET of the Console's Channels Values !
But this concerns only the container **"Channels"** !       
The best way to proceed is :  
Before sending any data from Chataigne to the console by the Channel-Tab's "form-fields", first request all the data from the console by **"Click To Sync All"**. This action is "request only"; than make eventually changes in the Channels and send them back to the console by **"Click To Send Updates"**.   
Please note also that the "Click to Sync All" Feature will request Data from the console by a "subscribe-function" that will be active for about 10 seconds, and you cannot change values in the fields during these 10 seconds...(or say,any change will be overwrittenby the console's values for about 10 seconds)     
The "Send-to-Console-Feature" is limited to the **Channels Container** only - (just to avoid risks and confusion); any other "Value-Tab" does not send any Value to the console !
Please use "States" and "Actions" to control the console properly !

To get Feedback from the console in a general way, "Listen to Feedback" in the Parameter-Field must be activated ! (it is "ON" by default when inserting a MR-Module).   
To stop all feedback from the console just deactivate the "Listen to Feedback" Button  
 
Please note that after  inserting a "new" MR-Module and/or after changing the Remote-Host-Address, Feedback from the console may not be available immediatly and may need a "Save" (cmd-S) and  "Reload" (cmd-shift-O) of the Session-File. 
(*unless you had already entered the right "remoteHost address" in the "module.json" file before loading the module; in this case Feedback will be available instantly ! ... just use the "Sync" buttons.*) But anyway, once the session file is "saved" then the feedback will always be available !   

**Older version 2.0**    
**Older version 1.8**  
**Older version 1.5**  
**Older version 1.3**
