
package com.postgresdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  postgresDB.GeTbIndex
 *  01/23/2013 09:59:14
 * 
 */
public class GeTbIndex {

    private Integer geindexid;
    private SiClientes siClientes;
    private String geindexcod;
    private String geindexdescr;
    private String geindexperiodo;
    private String geindexstatus;
    private Date geindexinivig;
    private Date geindexfimvig;
    private Set<com.postgresdb.data.GeTbIndexCota> geTbIndexCotas = new HashSet<com.postgresdb.data.GeTbIndexCota>();

    public Integer getGeindexid() {
        return geindexid;
    }

    public void setGeindexid(Integer geindexid) {
        this.geindexid = geindexid;
    }

    public SiClientes getSiClientes() {
        return siClientes;
    }

    public void setSiClientes(SiClientes siClientes) {
        this.siClientes = siClientes;
    }

    public String getGeindexcod() {
        return geindexcod;
    }

    public void setGeindexcod(String geindexcod) {
        this.geindexcod = geindexcod;
    }

    public String getGeindexdescr() {
        return geindexdescr;
    }

    public void setGeindexdescr(String geindexdescr) {
        this.geindexdescr = geindexdescr;
    }

    public String getGeindexperiodo() {
        return geindexperiodo;
    }

    public void setGeindexperiodo(String geindexperiodo) {
        this.geindexperiodo = geindexperiodo;
    }

    public String getGeindexstatus() {
        return geindexstatus;
    }

    public void setGeindexstatus(String geindexstatus) {
        this.geindexstatus = geindexstatus;
    }

    public Date getGeindexinivig() {
        return geindexinivig;
    }

    public void setGeindexinivig(Date geindexinivig) {
        this.geindexinivig = geindexinivig;
    }

    public Date getGeindexfimvig() {
        return geindexfimvig;
    }

    public void setGeindexfimvig(Date geindexfimvig) {
        this.geindexfimvig = geindexfimvig;
    }

    public Set<com.postgresdb.data.GeTbIndexCota> getGeTbIndexCotas() {
        return geTbIndexCotas;
    }

    public void setGeTbIndexCotas(Set<com.postgresdb.data.GeTbIndexCota> geTbIndexCotas) {
        this.geTbIndexCotas = geTbIndexCotas;
    }

}
