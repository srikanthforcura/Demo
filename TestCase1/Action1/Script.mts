' Demo Project for Forcura

SystemUtil.Run  "C:\Program Files\Internet Explorer\iexplore.exe","https://uat-alloy.myforcura.com/"
wait(5)
if browser("Forcura").Page("ForcuraLoginPage").Exist then
	Reporter.ReportEvent micPass,"Open Alloy Page", "opened alloy page"
	browser("Forcura").Page("ForcuraLoginPage").WebEdit("UserName").Set "srikanth.valdasu@innovasolutions.com"
	browser("Forcura").Page("ForcuraLoginPage").WebButton("Next").Click
	wait(5)
		If browser("Forcura").Page("ForcuraLoginPage").WebEdit("Password").Exist Then
		browser("Forcura").Page("ForcuraLoginPage").WebEdit("Password").SetSecure "5e56b54fea9000b156a806e067e3ec2446d04a4fe407"	
		End If	
	browser("Forcura").Page("ForcuraLoginPage").Webbutton("Sign In").Click
    wait(3)
	    If browser("Forcura").Page("Forcura_HomePage").Exist Then
	 	Reporter.ReportEvent micPass,"Alloy Login","Login successfull"
	 	Else
	 	Reporter.ReportEvent micFail,"Alloy Login","Login Failed"
	    End If

Else
 Reporter.ReportEvent micFail,"Open Alloy  Page", "Unable to open alloy page"
End If
