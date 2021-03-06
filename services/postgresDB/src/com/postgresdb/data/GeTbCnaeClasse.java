
package com.postgresdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  postgresDB.GeTbCnaeClasse
 *  01/23/2013 09:59:13
 * 
 */
public class GeTbCnaeClasse {

    private String gecnaedcod;
    private GeTbCnaeGrupo geTbCnaeGrupo;
    private String gecnaednome;
    private Set<com.postgresdb.data.GeTbCnaeSubclasse> geTbCnaeSubclasses = new HashSet<com.postgresdb.data.GeTbCnaeSubclasse>();

    public String getGecnaedcod() {
        return gecnaedcod;
    }

    public void setGecnaedcod(String gecnaedcod) {
        this.gecnaedcod = gecnaedcod;
    }

    public GeTbCnaeGrupo getGeTbCnaeGrupo() {
        return geTbCnaeGrupo;
    }

    public void setGeTbCnaeGrupo(GeTbCnaeGrupo geTbCnaeGrupo) {
        this.geTbCnaeGrupo = geTbCnaeGrupo;
    }

    public String getGecnaednome() {
        return gecnaednome;
    }

    public void setGecnaednome(String gecnaednome) {
        this.gecnaednome = gecnaednome;
    }

    public Set<com.postgresdb.data.GeTbCnaeSubclasse> getGeTbCnaeSubclasses() {
        return geTbCnaeSubclasses;
    }

    public void setGeTbCnaeSubclasses(Set<com.postgresdb.data.GeTbCnaeSubclasse> geTbCnaeSubclasses) {
        this.geTbCnaeSubclasses = geTbCnaeSubclasses;
    }

}
