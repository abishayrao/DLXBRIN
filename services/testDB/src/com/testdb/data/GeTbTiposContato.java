
package com.testdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  testDB.GeTbTiposContato
 *  03/07/2013 22:09:27
 * 
 */
public class GeTbTiposContato {

    private Integer getipoctoid;
    private SiClientes siClientes;
    private String getipoctocod;
    private String getipoctodescr;
    private String getipoctostatus;
    private Date getipoctoinivig;
    private Date getipoctofimvig;
    private Set<com.testdb.data.SiCliContatosHist> siCliContatosHists = new HashSet<com.testdb.data.SiCliContatosHist>();
    private Set<com.testdb.data.GeCaEmpContatosHist> geCaEmpContatosHists = new HashSet<com.testdb.data.GeCaEmpContatosHist>();

    public Integer getGetipoctoid() {
        return getipoctoid;
    }

    public void setGetipoctoid(Integer getipoctoid) {
        this.getipoctoid = getipoctoid;
    }

    public SiClientes getSiClientes() {
        return siClientes;
    }

    public void setSiClientes(SiClientes siClientes) {
        this.siClientes = siClientes;
    }

    public String getGetipoctocod() {
        return getipoctocod;
    }

    public void setGetipoctocod(String getipoctocod) {
        this.getipoctocod = getipoctocod;
    }

    public String getGetipoctodescr() {
        return getipoctodescr;
    }

    public void setGetipoctodescr(String getipoctodescr) {
        this.getipoctodescr = getipoctodescr;
    }

    public String getGetipoctostatus() {
        return getipoctostatus;
    }

    public void setGetipoctostatus(String getipoctostatus) {
        this.getipoctostatus = getipoctostatus;
    }

    public Date getGetipoctoinivig() {
        return getipoctoinivig;
    }

    public void setGetipoctoinivig(Date getipoctoinivig) {
        this.getipoctoinivig = getipoctoinivig;
    }

    public Date getGetipoctofimvig() {
        return getipoctofimvig;
    }

    public void setGetipoctofimvig(Date getipoctofimvig) {
        this.getipoctofimvig = getipoctofimvig;
    }

    public Set<com.testdb.data.SiCliContatosHist> getSiCliContatosHists() {
        return siCliContatosHists;
    }

    public void setSiCliContatosHists(Set<com.testdb.data.SiCliContatosHist> siCliContatosHists) {
        this.siCliContatosHists = siCliContatosHists;
    }

    public Set<com.testdb.data.GeCaEmpContatosHist> getGeCaEmpContatosHists() {
        return geCaEmpContatosHists;
    }

    public void setGeCaEmpContatosHists(Set<com.testdb.data.GeCaEmpContatosHist> geCaEmpContatosHists) {
        this.geCaEmpContatosHists = geCaEmpContatosHists;
    }

}
