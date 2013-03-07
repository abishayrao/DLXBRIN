
package com.testdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  testDB.GeTbBancos
 *  03/07/2013 22:09:27
 * 
 */
public class GeTbBancos {

    private Integer gebancoid;
    private SiClientes siClientes;
    private String gebancocod;
    private String gebanconome;
    private String gebancostatus;
    private Date gebancoinivig;
    private Date gebancofimvig;
    private Set<com.testdb.data.GeTbBcAgencias> geTbBcAgenciases = new HashSet<com.testdb.data.GeTbBcAgencias>();
    private Set<com.testdb.data.GeCaEmpContas> geCaEmpContases = new HashSet<com.testdb.data.GeCaEmpContas>();
    private Set<com.testdb.data.SiCliContas> siCliContases = new HashSet<com.testdb.data.SiCliContas>();

    public Integer getGebancoid() {
        return gebancoid;
    }

    public void setGebancoid(Integer gebancoid) {
        this.gebancoid = gebancoid;
    }

    public SiClientes getSiClientes() {
        return siClientes;
    }

    public void setSiClientes(SiClientes siClientes) {
        this.siClientes = siClientes;
    }

    public String getGebancocod() {
        return gebancocod;
    }

    public void setGebancocod(String gebancocod) {
        this.gebancocod = gebancocod;
    }

    public String getGebanconome() {
        return gebanconome;
    }

    public void setGebanconome(String gebanconome) {
        this.gebanconome = gebanconome;
    }

    public String getGebancostatus() {
        return gebancostatus;
    }

    public void setGebancostatus(String gebancostatus) {
        this.gebancostatus = gebancostatus;
    }

    public Date getGebancoinivig() {
        return gebancoinivig;
    }

    public void setGebancoinivig(Date gebancoinivig) {
        this.gebancoinivig = gebancoinivig;
    }

    public Date getGebancofimvig() {
        return gebancofimvig;
    }

    public void setGebancofimvig(Date gebancofimvig) {
        this.gebancofimvig = gebancofimvig;
    }

    public Set<com.testdb.data.GeTbBcAgencias> getGeTbBcAgenciases() {
        return geTbBcAgenciases;
    }

    public void setGeTbBcAgenciases(Set<com.testdb.data.GeTbBcAgencias> geTbBcAgenciases) {
        this.geTbBcAgenciases = geTbBcAgenciases;
    }

    public Set<com.testdb.data.GeCaEmpContas> getGeCaEmpContases() {
        return geCaEmpContases;
    }

    public void setGeCaEmpContases(Set<com.testdb.data.GeCaEmpContas> geCaEmpContases) {
        this.geCaEmpContases = geCaEmpContases;
    }

    public Set<com.testdb.data.SiCliContas> getSiCliContases() {
        return siCliContases;
    }

    public void setSiCliContases(Set<com.testdb.data.SiCliContas> siCliContases) {
        this.siCliContases = siCliContases;
    }

}
