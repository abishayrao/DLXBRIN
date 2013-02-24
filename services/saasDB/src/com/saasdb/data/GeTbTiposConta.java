
package com.saasdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  saasDB.GeTbTiposConta
 *  01/08/2013 14:21:13
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
    private Set<com.saasdb.data.GeCaEmpContas> geCaEmpContases = new HashSet<com.saasdb.data.GeCaEmpContas>();
    private Set<com.saasdb.data.SiCliContas> siCliContases = new HashSet<com.saasdb.data.SiCliContas>();

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

    public Set<com.saasdb.data.GeCaEmpContas> getGeCaEmpContases() {
        return geCaEmpContases;
    }

    public void setGeCaEmpContases(Set<com.saasdb.data.GeCaEmpContas> geCaEmpContases) {
        this.geCaEmpContases = geCaEmpContases;
    }

    public Set<com.saasdb.data.SiCliContas> getSiCliContases() {
        return siCliContases;
    }

    public void setSiCliContases(Set<com.saasdb.data.SiCliContas> siCliContases) {
        this.siCliContases = siCliContases;
    }

}
