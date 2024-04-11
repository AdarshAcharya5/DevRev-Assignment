import requests
import os
from dotenv import load_dotenv
load_dotenv()
url = "https://api.devrev.ai/works.create"
headers = {
    'Authorization': os.environ.get('DEVREV_API_KEY'),
    "Content-Type": "application/json"
}

data = {
  "type": "issue",
  "owned_by": ["DEVU-1"],
  "title": "Test Work Item 1",
  "applies_to_part":"PROD-1",
}

response = requests.post(url, headers=headers, json=data)
print(response.content)