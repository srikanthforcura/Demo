
If browser("Forcura").Page("Forcura_HomePage").Exist Then
	browser("Forcura").Page("Forcura_HomePage").Link("Drive").Click
	wait(3)
	browser("Forcura").Page("Forcura_HomePage").WebButton("SV").Click
	browser("Forcura").Page("Forcura_HomePage").Link("Profile Settings").Click
	wait(2)
	browser("Forcura").Page("Forcura_HomePage").WebEdit("Mobile").Set "1234567890"
	browser("Forcura").Page("Forcura_HomePage").WebButton("Cancel").Click
	wait(2)
	browser("Forcura").Page("Forcura_HomePage").Link("Cases").Click
	wait(2)
	browser("Forcura").Page("Forcura_HomePage").Link("Dashboard").Click
 Else
 Reporter.ReportEvent micFail,"Open Alloy Page", "Unable to open alloy page"
End If
