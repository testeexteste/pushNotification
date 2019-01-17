package blockly;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;


@CronapiMetaData(type = "blockly")
@CronappSecurity
public class Notifica {

public static final int TIMEOUT = 300;

/**
 *
 * @param token
 * @return Var
 */
// notifica
public static Var enviar(Var token) throws Exception {
 return new Callable<Var>() {

   private Var dado = Var.VAR_NULL;

   public Var call() throws Exception {
    dado = cronapi.json.Operations.createObjectJson();
    cronapi.json.Operations.setJsonOrMapField(dado, Var.valueOf("msg"), Var.valueOf("Laele recebeu minha mensagem!"));
    cronapi.pushnotification.Operations.sendNotification(Var.valueOf("AAAAZYRktXs:APA91bEMJRTs7gja_eVpb0T0WwrQy35RL3HHD4J6wRToKdQF_cwXB5Mo8I9TDYg2XUomTTGMIEiBDutKDD_CSrXSi9xbxN8yONihk-YXpPbEg070sH25aK6P9X8qdJSKMoEVuvV5nWfk"), token, Var.valueOf("Olá "), Var.valueOf("teste do push"), dado);
    return Var.VAR_NULL;
   }
 }.call();
}

}

