
package com.postgresdb.data;



/**
 *  postgresDB.SiCliModulo
 *  01/23/2013 09:59:14
 * 
 */
public class SiCliModulo {

    private Integer sicxmid;
    private SiClientes siClientes;
    private SiSisModulo siSisModulo;
    private String sicxmetapa;
    private String sicxmdatalimite;

    public Integer getSicxmid() {
        return sicxmid;
    }

    public void setSicxmid(Integer sicxmid) {
        this.sicxmid = sicxmid;
    }

    public SiClientes getSiClientes() {
        return siClientes;
    }

    public void setSiClientes(SiClientes siClientes) {
        this.siClientes = siClientes;
    }

    public SiSisModulo getSiSisModulo() {
        return siSisModulo;
    }

    public void setSiSisModulo(SiSisModulo siSisModulo) {
        this.siSisModulo = siSisModulo;
    }

    public String getSicxmetapa() {
        return sicxmetapa;
    }

    public void setSicxmetapa(String sicxmetapa) {
        this.sicxmetapa = sicxmetapa;
    }

    public String getSicxmdatalimite() {
        return sicxmdatalimite;
    }

    public void setSicxmdatalimite(String sicxmdatalimite) {
        this.sicxmdatalimite = sicxmdatalimite;
    }

}
