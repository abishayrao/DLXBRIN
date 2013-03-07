
package com.testdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  testDB.GeTbTiposConta
 *  03/07/2013 22:09:27
 * 
 */
public class GeTbTiposConta {

    private Integer getipoconid;
    private SiClientes siClientes;
    private String getipoconcod;
    private String getipocondescr;
    private String getipoconstatus;
    private Date getipoconinivig;
    private Date getipoconfimvig;
    private Set<com.testdb.data.GeCaEmpContas> geCaEmpContases = new HashSet<com.testdb.data.GeCaEmpContas>();
    private Set<com.testdb.data.SiCliContas> siCliContases = new HashSet<com.testdb.data.SiCliContas>();

    public Integer getGetipoconid() {
        return getipoconid;
    }

    public void setGetipoconid(Integer getipoconid) {
        this.getipoconid = getipoconid;
    }

    public SiClientes getSiClientes() {
        return siClientes;
    }

    public void setSiClientes(SiClientes siClientes) {
        this.siClientes = siClientes;
    }

    public String getGetipoconcod() {
        return getipoconcod;
    }

    public void setGetipoconcod(String getipoconcod) {
        this.getipoconcod = getipoconcod;
    }

    public String getGetipocondescr() {
        return getipocondescr;
    }

    public void setGetipocondescr(String getipocondescr) {
        this.getipocondescr = getipocondescr;
    }

    public String getGetipoconstatus() {
        return getipoconstatus;
    }

    public void setGetipoconstatus(String getipoconstatus) {
        this.getipoconstatus = getipoconstatus;
    }

    public Date getGetipoconinivig() {
        return getipoconinivig;
    }

    public void setGetipoconinivig(Date getipoconinivig) {
        this.getipoconinivig = getipoconinivig;
    }

    public Date getGetipoconfimvig() {
        return getipoconfimvig;
    }

    public void setGetipoconfimvig(Date getipoconfimvig) {
        this.getipoconfimvig = getipoconfimvig;
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
