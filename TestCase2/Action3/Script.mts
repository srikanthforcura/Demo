
wait(2)
If browser("Forcura").Page("Forcura_HomePage").Exist Then
	browser("Forcura").Page("Forcura_HomePage").WebButton("SV").Click
	wait(2)
	browser("Forcura").Page("Forcura_HomePage").Webelement("Log Out").Click
Else
 Reporter.ReportEvent micFail,"Open Alloy Page", "Unable to open alloy page"
End If
browser("Forcura").Close
