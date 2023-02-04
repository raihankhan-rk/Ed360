#include <Notecard.h>
#define productUID "com.gmail.raihankhan.rk19:ed360"

Notecard notecard;
void setup() {
  delay(2500);
  Serial.begin(115200);
  notecard.begin();
  J *req = notecard.newRequest("hub.set");
  JAddStringToObject(req, "product", productUID);
  JAddStringToObject(req, "mode", "continuous");
  notecard.sendRequest(req);
}
void loop() {
  J *req = notecard.newRequest("note.add");
  if (req != NULL) {
    JAddStringToObject(req, "file", "twilio.qo");
    JAddBoolToObject(req, "sync", true);
    // JAddStringToObject(req, "body", {
    //     "twilioBody", "Hello from Notecard!"
    // })
    J *body = JCreateObject();
    if (body != NULL) {
      JAddStringToObject(body, "twilioBody", "Hello my dear student");
      JAddItemToObject(req, "body", body);
    }
    notecard.sendRequest(req);
  }
  delay(15000);
}