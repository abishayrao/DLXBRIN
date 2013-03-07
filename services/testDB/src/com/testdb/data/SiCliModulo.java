
package com.testdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  testDB.SiCliModulo
 *  03/07/2013 22:09:27
 * 
 */
public class SiCliModulo {

    private Integer sicxmid;
    private SiClientes siClientes;
    private SiSisModulo siSisModulo;
    private String sicxmetapa;
    private String sicxmdatalimite;
    private String sicxmstatus;
    private Set<com.testdb.data.GeSgGruXModulos> geSgGruXModuloses = new HashSet<com.testdb.data.GeSgGruXModulos>();

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

    public String getSicxmstatus() {
        return sicxmstatus;
    }

    public void setSicxmstatus(String sicxmstatus) {
        this.sicxmstatus = sicxmstatus;
    }

    public Set<com.testdb.data.GeSgGruXModulos> getGeSgGruXModuloses() {
        return geSgGruXModuloses;
    }

    public void setGeSgGruXModuloses(Set<com.testdb.data.GeSgGruXModulos> geSgGruXModuloses) {
        this.geSgGruXModuloses = geSgGruXModuloses;
    }

}
