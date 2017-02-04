
#key statistics from yahoo api

import urllib2
import json

#function to be used in another script

def get_key_stats_api(stock):

	api_url = "https://query2.finance.yahoo.com/v10/finance/quoteSummary/%s?modules=defaultKeyStatistics" % stock

	response = urllib2.urlopen(api_url)
	key_statistics_json = response.read()

	key_statistics_dict = json.loads(key_statistics_json)
	
	return key_statistics_dict

print get_key_stats_api("MSFT")
